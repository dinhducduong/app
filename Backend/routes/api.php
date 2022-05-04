<?php

use App\Http\Controllers\Product\ProductController;
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
    Route::post('/addToCart', [ProductController::class, 'addToCart']);
    Route::get('/getCart', [ProductController::class, 'getCarts']);
});