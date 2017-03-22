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

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::group(['middleware'=>'role'] , function(){
Route::get('/admin', 'adminController@index');
    
});
Route::group(['middleware'=>'comp'] , function(){
Route::get('/company', 'compController@index');
Route::get('/app', 'compController@appIndex');
Route::get('/page', 'compController@Page'); 
Route::post('/array', 'compController@Array'); 
Route::post('/submit', 'compController@Submit'); 
Route::get('/choseApps', 'compController@choseApps');   
Route::get('/fetch', 'compController@fetch');  
Route::get('/pageAdd', 'compController@pageAdd');  
Route::get('/pageName', 'compController@pageName'); 
Route::get('/pageDelete', 'compController@pageDelete'); 
Route::get('/GroupAdd', 'compController@groupAdd'); 
Route::get('/GroupName', 'compController@GroupName');
Route::get('/groupDelete', 'compController@GroupDelete'); 
//reports
Route::get('/ReportPage', 'compController@ReportPage'); 
Route::post('/ReportsData', 'compController@ReportPage'); 
Route::get('/reportajax', 'compController@reportajax'); 
Route::post('pdfview',array('as'=>'pdfview','uses'=>'ItemController@pdfview'));
Route::get('/referance', 'compController@referance'); 
Route::post('/FilterData', 'compController@FilterData'); 
});