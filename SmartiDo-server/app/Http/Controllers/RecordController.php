<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    function getAllRecords(){
        try{
            $records = Record::join('users', 'records.user_id', '=', 'users.id')
                            ->leftJoin('profiles', 'records.user_id', '=', 'profiles.user_id')
                            ->select('name', 'email', 'picture', 'bio', 'dob', 'gender','score')
                            ->orderBy('score', 'desc')
                            ->get();

            return response()->json([
                'status' => 'success',
                'records' => $records,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    function getMyRecord(){
        try{
            $id = Auth::id();
            $record = Record::join('users', 'records.user_id', '=', 'users.id')
                            ->leftJoin('profiles', 'records.user_id', '=', 'profiles.user_id')
                            ->select('name', 'email', 'picture', 'bio', 'dob', 'gender','score')
                            ->where('records.user_id', $id)
                            ->first();

            return response()->json([
                'status' => 'success',
                'record' => $record,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
