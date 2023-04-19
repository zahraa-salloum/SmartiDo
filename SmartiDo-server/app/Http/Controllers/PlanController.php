<?php

namespace App\Http\Controllers;
use App\Models\Time;
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
        $title = $request->title;
        $category = $request->category;
        $hours_of_study = $request->hours_of_study;
        $day = $request->day;
        $hour = $request->hour;

        $times = new Time;

        $times->sleep = $sleep;
        $times->wake_up = $wake_up;
        $times->breakfast = $breakfast;
        $times->lunch = $lunch;
        $times->dinner = $dinner;
        $times->user_id = $id;
        
        $times->save();

    }
}
