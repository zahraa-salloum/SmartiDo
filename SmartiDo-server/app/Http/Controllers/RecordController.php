<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    function getAllRecords(){
        try{
            $records = Record::join('users', 'records.user_id', '=', 'users.id')
                            ->leftJoin('profiles', 'records.user_id', '=', 'profiles.user_id')
                            ->select('name', 'email', 'picture', 'bio', 'dob', 'gender','score')
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
}
