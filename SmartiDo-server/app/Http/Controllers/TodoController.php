<?php

namespace App\Http\Controllers;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    function getAllTodos(){
        try{
            $id = Auth::id();
            $todos = Todo::where('user_id',$id)->get();
    
            return response()->json([
                'status' => 'success',
                'todos' => $todos,
            ], 200);
        }catch (\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => 'Unable to retrieve to-do items',
            ], 500);
        }
    }

    function addTodo(Request $request){
        try{
            $id = Auth::id();
            $todo = new Todo;

            $todo->to_do = $request->to_do;
            $todo->user_id = $id;
            $todo->done = 0;

            $todo->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Todo Added',
                'todo' => $todo,
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}