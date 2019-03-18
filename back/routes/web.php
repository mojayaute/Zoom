<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('data','dataController@index');
Route::post('data','dataController@index');
Route::put('data','dataController@index');
Route::delete('data','dataController@index');
Route::patch('data','dataController@index');
