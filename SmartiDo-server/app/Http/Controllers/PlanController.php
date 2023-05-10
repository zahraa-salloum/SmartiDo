<?php

namespace App\Http\Controllers;
use App\Models\Exam;
use App\Models\Plan;
use App\Models\Record;
use App\Models\Regenerate;
use App\Models\Time;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use OpenAI;

set_time_limit(240);
class PlanController extends Controller
{
    function generatePlan(Request $request) {
      try{
        $id = Auth::id();
        $sleep = $request->sleep;
        $wake_up = $request->wake_up;
        $breakfast = $request->breakfast;
        $lunch = $request->lunch;
        $dinner = $request->dinner;
        
        $exams = $request->exams;
        $exams = collect($exams)->sortBy('day')->values()->all();
        $times = new Time;

        $times->sleep = $sleep;
        $times->wake_up = $wake_up;
        $times->breakfast = $breakfast;
        $times->lunch = $lunch;
        $times->dinner = $dinner;
        $times->user_id = $id;

        $times->save();

        $arr_exams_reserved_days = [];
        foreach ($exams as $key => $exam) {
            array_push($arr_exams_reserved_days, $exam['day']); 
            array_push($arr_exams_reserved_days, Carbon::parse($exam['day'])->subDay()->toDateString()); 
        }

        foreach ($exams as $key => $exam) {
            $exam_inserted = new Exam;
            $exam_inserted->title = $exam['title'];
            $exam_inserted->category = $exam['category'];
            $exam_inserted->hours_of_study = $exam['hours_of_study'];
            $exam_inserted->day = $exam['day'];
            $exam_inserted->hour = $exam['hour'];
            $exam_inserted->user_id = $id;
        
            $exam_date = Carbon::parse($exam['day']);
            $now = Carbon::now();
            $days_before_exam = $now->diffInDays($exam_date, false);
        
            
            $days_of_exams = 0;
            for($i = $now; $i <= Carbon::parse($exam['day']); $i=($i)->addDays(1) ){
                if(in_array($i->toDateString(), $arr_exams_reserved_days)){
                    $days_of_exams++;
                }
            }
            if(($days_before_exam - $days_of_exams) > 0){    
                $hours_per_day =ceil($exam_inserted->hours_of_study / ($days_before_exam - $days_of_exams));
                $exam_inserted->days_of_study = $days_before_exam - $days_of_exams;
            }else{
                $hours_per_day = 0;
                $exam_inserted->days_of_study = 0;
            }
            $exam_inserted->hours_per_day = $hours_per_day;

            $exam_inserted->save();

            $plans_review_exam = [
                [
                    'hour' => $exam['hour'],
                    'task' => $exam['title'],
                    'day' => $exam['day'],
                    'user_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now()
                ],
                [
                    'hour' => '*',
                    'task' => "Review notes for tomorrow's exam",
                    'day' => Carbon::parse($exam['day'])->subDay()->toDateString(),
                    'user_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now()
                ]
            ];
            Plan::insert($plans_review_exam);
        }

        Plan::insert([
            'hour' => '*',
            'task' => "Plan generted for tomorrow",
            'day' => Carbon::now()->toDateString(),
            'user_id' => $id,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        $exams_AI = Exam::where('user_id', $id)
                        ->orderBy('day', 'asc')
                        ->get();

        $max_days = Exam::where('user_id', $id)
                        ->max('days_of_study');

        $ApiKey = getenv('OPENAI_SECRET');
        $client = OpenAI::client($ApiKey);

        $count = 0;
        $days_increment = 1;
        $arr_reserved_days = [];
        foreach ($exams_AI as $exam) {

            array_push($arr_reserved_days, $exam->day);
            if(!in_array(Carbon::parse($exam->day)->subDay()->toDateString(), $arr_reserved_days)){
                array_push($arr_reserved_days, Carbon::parse($exam->day)->subDay()->toDateString());
            }
        }
    
        while($max_days > 0){
            $prompt = 'I have ';
            foreach ($exams_AI as $exam) {
                if($exam->days_of_study > $count){
                    $prompt .= "a " . $exam->category . ' exam and ';
                }
                
            }
            for($i=0; $i < count($arr_reserved_days); $i++){
                if(in_array(Carbon::now()->addDays($days_increment)->toDateString(), $arr_reserved_days)){
                    $days_increment = $days_increment+1;
                }
            }

            $prompt .= ".\nI sleep at " . $sleep . ' and wake at ' . $wake_up . '.';
            $prompt .= "\nI have breakfast at " . $breakfast . '.';
            $prompt .= "\nI have lunch at " . $lunch . '.';
            $prompt .= "\nI have dinner at " . $dinner . '.';
            foreach ($exams_AI as $exam) {
                if($exam->days_of_study > $count){
                    $prompt .= "\nI want to study " . $exam->hours_per_day . ' hours of ' . $exam->category . " material only.";
                }    
            }
            $prompt .= "\nDo not add additional hours of study.";
            $prompt .= "\n\nPlan the day " .Carbon::now()->addDays($days_increment)->format('Y-m-d') . " in details where you state in every hour what to do.";
            $prompt .= "\nReturn the answer as JSON parsable object (do not return any text or explanation or notes before or after the JSON object).";
            $prompt .= "\nThe JSON object should be in this format { \"result\": [ {\"hour\": \"\", \"task\":\"\", \"day\":\"\"},{\"hour\": \"\", \"task\":\"\", \"day\":\"\"}.......]}.";
            $prompt .= "\nIf the task is about study always start it with study and then state the subject (ex: study biology).";

            $days_increment++;
            $result = $client->completions()->create([
                'model' => 'text-davinci-003',
                'temperature' => 0.7,
                'max_tokens' => 1024,
                'prompt' => $prompt,
            ]);

            $data = json_decode($result['choices'][0]['text'], true);
            $plans = array();

            foreach ($data['result'] as $plan) {
                $plans[] = [
                    'hour' => $plan['hour'],
                    'task' => $plan['task'],
                    'day' => $plan['day'],
                    'user_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }

            Plan::insert($plans);

            $count++;
            $max_days--;
        }
        
        return response()->json([
            'status' => 'success',
            'message' => 'Plan generated successfully',
        ], 200);
      }catch(\Exception $e){
        return response()->json([
            'status' => 'error',
            'message' => $e->getMessage(),
        ], 500);
      }     
    }
    

    function regeneratePlan(Request $request) {
        try{
            $id = Auth::id();
            $regenerate = Regenerate::where('user_id', $id)->first();
    
            if(!$regenerate){
                $regenerate = new Regenerate;
                $regenerate->user_id = $id;
                $regenerate->count = 0;
            }

            $regenerate->count = $regenerate->count + 1;
            $regenerate->save();

            $delete_plans = Plan::where('user_id',$id)->delete();

            $exams = Exam::where('user_id',$id)->get();

            foreach ($exams as $exam) {
                $exam->days_of_study = $exam->days_of_study - 1;
                if($exam->days_of_study > 0){
                    $exam->hours_per_day = ceil($exam->hours_of_study / $exam->days_of_study);
                }else{
                    $exam->days_of_study = 0;
                    $exam->hours_per_day = 0;
                }
                $exam->save();
                $plans_review_exam = [
                    [
                        'hour' => $exam['hour'],
                        'task' => $exam['title'],
                        'day' => $exam['day'],
                        'user_id' => $id,
                        'created_at' => now(),
                        'updated_at' => now()
                    ],
                    [
                        'hour' => '*',
                        'task' => "Review notes for tomorrow's exam",
                        'day' => Carbon::parse($exam['day'])->subDay()->toDateString(),
                        'user_id' => $id,
                        'created_at' => now(),
                        'updated_at' => now()
                    ]
                ];
                Plan::insert($plans_review_exam);
            }

            Plan::insert([
                        'hour' => '*',
                        'task' => "Plan regenerted for tomorrow",
                        'day' => Carbon::now()->toDateString(),
                        'user_id' => $id,
                        'created_at' => now(),
                        'updated_at' => now()
                    ]);

            $times = Time::where('user_id', $id)->first();

            $exams_AI = Exam::where('user_id', $id)
                            ->orderBy('day', 'asc')
                            ->get();

            $max_days = Exam::where('user_id', $id)
                            ->max('days_of_study');

            $ApiKey = getenv('OPENAI_SECRET');
            $client = OpenAI::client($ApiKey);

            $count = 0;
            $days_increment = 1;
            $arr_reserved_days = [];
            foreach ($exams_AI as $exam) {

                array_push($arr_reserved_days, $exam->day);
                if(!in_array(Carbon::parse($exam->day)->subDay()->toDateString(), $arr_reserved_days)){
                    array_push($arr_reserved_days, Carbon::parse($exam->day)->subDay()->toDateString());
                }
            }
    
            while($max_days > 0){
                $prompt = 'I have ';
                foreach ($exams_AI as $exam) {
                    if($exam->days_of_study > $count){
                        $prompt .= "a " . $exam->category . ' exam and ';
                    }
                
                }
                for($i=0; $i < count($arr_reserved_days); $i++){
                    if(in_array(Carbon::now()->addDays($days_increment)->toDateString(), $arr_reserved_days)){
                        $days_increment = $days_increment+1;
                    }
                }

                $prompt .= ".\nI sleep at " . $times->sleep . ' and wake at ' . $times->wake_up . '.';
                $prompt .= "\nI have breakfast at " . $times->breakfast . '.';
                $prompt .= "\nI have lunch at " . $times->lunch . '.';
                $prompt .= "\nI have dinner at " . $times->dinner . '.';
                foreach ($exams_AI as $exam) {
                    if($exam->days_of_study > $count){
                        $prompt .= "\nI want to study " . $exam->hours_per_day . ' hours of ' . $exam->category . " material only.";
                    }    
                }
                $prompt .= "\nDo not add additional hours of study.";
                $prompt .= "\n\nPlan the day " .Carbon::now()->addDays($days_increment)->format('Y-m-d') . " in details where you state in every hour what to do.";
                $prompt .= "\nReturn the answer as JSON parsable object (do not return any text or explanation or notes before or after the JSON object).";
                $prompt .= "\nThe JSON object should be in this format { \"result\": [ {\"hour\": \"\", \"task\":\"\", \"day\":\"\"},{\"hour\": \"\", \"task\":\"\", \"day\":\"\"}.......]}.";
                $prompt .= "\nIf the task is about study always start it with study and then state the subject (ex: study biology).";

                $days_increment++;
                $result = $client->completions()->create([
                    'model' => 'text-davinci-003',
                    'temperature' => 0.7,
                    'max_tokens' => 1024,
                    'prompt' => $prompt,
                ]);

                $data = json_decode($result['choices'][0]['text'], true);
                $plans = array();

                foreach ($data['result'] as $plan) {
                    $plans[] = [
                        'hour' => $plan['hour'],
                        'task' => $plan['task'],
                        'day' => $plan['day'],
                        'user_id' => $id,
                        'created_at' => now(),
                        'updated_at' => now()
                    ];
                }

                Plan::insert($plans);


                $max_days--;
                $count++;
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Plan regenerated successfully',
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
          }  
    }

    function getPlan(Request $request){
        try{
            $id = Auth::id();
            $day = $request->day;
            $plan = Plan::where('user_id',$id)->where('day',$day)->get();

            return response()->json([
                'status' => 'success',
                'plan' => $plan,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to get plan',
            ], 500);
        }
    }

    function studyDone(){
        try{
            $id = Auth::id();
            $exams = Exam::where('user_id',$id)->get();

            foreach ($exams as $exam) {
                $exam->hours_of_study = $exam->hours_of_study - $exam->hours_per_day;
                $exam->days_of_study = $exam->days_of_study - 1;
                if( $exam->hours_of_study < 0){
                    $exam->hours_of_study = 0;
                }
                if( $exam->days_of_study < 0){
                    $exam->days_of_study = 0;
                }
                $exam->save();
 
            }
            $record = Record::where('user_id', $id)->first();
    
                if(!$record){
                    $record = new Record;
                    $record->user_id = $id;
                    $record->score = 0;
                }

                $record->score = $record->score + 1;
                $record->save();

            return response()->json([
                'status' => 'success',
                'exams' => $exams,
                'record'  => $record,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update hours',
            ], 500);
        }
    }
}
