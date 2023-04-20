<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ExamController extends Controller
{
    function getExams(){
        try{
            $id = Auth::id();
            $exams = Exam::where('user_id',$id)->get();

            return response()->json([
                'status' => 'success',
                'exams' => $exams,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to get exams',
            ], 500);
        }
    }
}
