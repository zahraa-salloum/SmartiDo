<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DeleteController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\NewPasswordController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'v0.0.1'], function(){
    Route::group(['prefix' => 'auth'], function () {
        Route::post('login',[AuthController::class, 'login']);  
        Route::post('logout',[AuthController::class, 'logout']);
        Route::post('refresh',[AuthController::class, 'refresh']);
    });
    Route::post('register',[AuthController::class,'register']);
    Route::post('forgot-password', [NewPasswordController::class, 'forgotPassword']);

    Route::group(['middleware' => 'auth:api'], function(){
        Route::group(["middleware" => "admin.role", "prefix" => "admin"], function () {
            Route::get('/satistics', [AdminController::class, 'satistics']);
            Route::get('/get_users', [AdminController::class, 'getAllUsers']);
            Route::post('/block', [AdminController::class, 'block']);
            Route::get('/get_users_age', [AdminController::class, 'getUsersByAge']);
        });
        Route::post('/add_profile',[ProfileController::class,"addOrUpdateProfile"]);
        Route::get('/get_profile',[ProfileController::class,"getProfile"]);
        Route::get('/get_todos',[TodoController::class,"getAllTodos"]);
        Route::post('/add_todo',[TodoController::class,"addTodo"]);
        Route::post('/update_todo',[TodoController::class,"updateTodo"]);
        Route::get('/get_records',[RecordController::class,"getAllRecords"]);
        Route::get('/my_record',[RecordController::class,"getMyRecord"]);
        Route::delete('/delete_account',[DeleteController::class,"deleteAccount"]);
        Route::post('/generate_plan',[PlanController::class,"generatePlan"]);
        Route::delete('/delete_plan',[DeleteController::class,"deletePlan"]);
        Route::post('/get_plan',[PlanController::class,"getPlan"]);
        Route::get('/get_exams',[ExamController::class,"getExams"]);
        Route::post('/study_done',[PlanController::class,"studyDone"]);
        Route::post('/regenerate_plan',[PlanController::class,"regeneratePlan"]);
    });

});