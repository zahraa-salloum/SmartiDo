<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Block;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function getAllUsers(){
        try{
            $users = User::leftJoin('profiles', 'profiles.user_id', '=', 'users.id')
                                ->select('name', 'email', 'picture', 'bio', 'dob', 'gender')
                                ->where('type_id',2)
                                ->get();
    
            return response()->json([
                'status' => 'success',
                'users' => $users,
            ], 200);
        }catch (\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Unable to retrieve users',
            ], 500);
        }
    }
}
