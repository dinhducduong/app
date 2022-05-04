<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function getAll(Request $request)
    {
        $product = Product::get();
        return response()->json($product);
    }
    public function get($id, Request $request)
    {

        $product = Product::find($id);
        return response()->json($product);
    }
    public function addToCart(Request $request)
    {
        session()->put('key', 'value');
        dd(session()->get('key'));
    }
    public function getCarts(Request $request)
    {
        $cart = session()->get('key');
        $product = Product::get();
        return response()->json($cart);
    }
}