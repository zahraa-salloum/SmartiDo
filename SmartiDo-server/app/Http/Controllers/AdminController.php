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

    function block(Request $request){
        try{
            $block = Block::where('email', $request->email)->first();

            if(!$block){
                $block = new Block;
                $block->email = $request->email;
            }
            $block->save();

            if(isset($block) && $block != null){
                $delete_acount = User::where('email',$request->email)->delete();
                return response()->json([
                    'status' => 'success',
                    'blocked' => $block,
                ], 200);
            }
        }catch (\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Unable to block',
            ], 500);
        }
    }

    function getUsersByAge(){
        try{
            $users = User::Join('profiles', 'profiles.user_id', '=', 'users.id')
                                ->selectRaw('TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age')
                                ->where('type_id',2)
                                ->get();
    
            $ageGroups = $users->groupBy('age')->map(function ($group) {
                return count($group);
            });
    
            return response()->json([
                'status' => 'success',
                'users_by_age' => $ageGroups,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Unable to retrieve users by age',
            ], 500);
        }
    }
}
