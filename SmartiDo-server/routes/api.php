<?php

use App\Http\Controllers\ProfileController;
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

    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('/add_profile',[ProfileController::class,"addOrUpdateProfile"]);
        Route::get('/get_profile',[ProfileController::class,"getProfile"]);
        });

});