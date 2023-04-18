<?php

namespace App\Http\Controllers;
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
    
}
