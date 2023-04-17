<?php

namespace App\Http\Controllers;
use App\Models\Profile;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    function addOrUpdateProfile(Request $request){
        $id = Auth::id();
        $profile = Profile::where('user_id', $id)->first();
    
        if(!$profile){
            $profile = new Profile;
            $profile->user_id = $id;
        }
    
        $request->validate([
            'picture' => 'nullable|string',
            'bio' => 'nullable|string',
            'dob' => 'nullable|date',
            'gender' => 'nullable|string|in:male,female',
        ]);
    
        $profile->fill($request->only(['picture', 'bio', 'dob', 'gender']));
    
        try{
            $profile->save();
    
            return response([
                'status' => 'success',
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    function getProfile(){
        $id = Auth::id();
        try{
            $profile = Profile::join('users', 'profiles.user_id', '=', 'users.id')
                                ->select('name', 'email', 'picture', 'bio', 'dob', 'gender')
                                ->where('user_id', $id)
                                ->findOrFail($id);
            return response([
                'profile' => $profile
            ], 200);
        }catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e){
            return response([
                'message' => 'Profile not found'
            ], 404);
        }catch(\Exception $e){
            return response([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
