<?php

namespace App\Http\Controllers;
use App\Models\Exam;
use App\Models\Plan;
use App\Models\Time;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
class DeleteController extends Controller
{
    function deleteAccount(){
        try{
            $id = Auth::id();
            $delete_acount = User::where('id',$id)->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Account deleted',
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    function deletePlan(){
        try{
            $id = Auth::id();
            $delete_plans = Plan::where('user_id',$id)->delete();
            $delete_exams = Exam::where('user_id',$id)->delete();
            $delete_times = Time::where('user_id',$id)->delete();

            return response()->json([
            'status' => 'success',
            'message' => 'Plan deleted',
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
    
}
