<?php

use App\Http\Controllers\Categories\CategoryController;
use App\Http\Controllers\Product\OrderController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'getAll']);
    Route::get('/{id}', [ProductController::class, 'get']);
    Route::get('/getImg/{id}', [ProductController::class, 'getImage']);
    Route::post('/order', [OrderController::class, 'order']);
    Route::post('/add', [ProductController::class, 'create']);
    Route::put('/edit/{id}', [ProductController::class, 'edit']);
    Route::delete('/delete/{id}', [ProductController::class, 'destroy']);
});
Route::prefix('categorys')->group(function () {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{id}', [CategoryController::class, 'store']);
    Route::post('/add', [CategoryController::class, 'create']);
    Route::put('/edit/{id}', [CategoryController::class, 'edit']);
    Route::delete('/delete/{id}', [CategoryController::class, 'destroy']);
});
Route::prefix('users')->group(function () {
    Route::post('/add', [UserController::class, 'create']);
});