<?php

namespace App\Http\Controllers;
use App\Models\Exam;
use App\Models\Time;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    function generatePlan(Request $request) {
        $id = Auth::id();
        $sleep = $request->sleep;
        $wake_up = $request->wake_up;
        $breakfast = $request->breakfast;
        $lunch = $request->lunch;
        $dinner = $request->dinner;
        
        $exams = $request->exams;

        $times = new Time;

        $times->sleep = $sleep;
        $times->wake_up = $wake_up;
        $times->breakfast = $breakfast;
        $times->lunch = $lunch;
        $times->dinner = $dinner;
        $times->user_id = $id;

        $times->save();

        foreach ($exams as $exam) {
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

        
            $hours_per_day = $exam_inserted->hours_of_study / ($days_before_exam - 2);
            $exam_inserted->hours_per_day = $hours_per_day;

            $exam_inserted->save();
        }

    }
}
