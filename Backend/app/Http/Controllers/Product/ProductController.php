<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\ResponseFactory;

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
    public function post(Request $request)
    {
        $model = new Product();
        $model->name = $request->name;
        $model->category_id = $request->category_id;
        $model->price = $request->price;
        $model->images = $request->images;
        $model->size = $request->size;
        $model->color = $request->color;
        $model->quantity = $request->quantity;
        $model->description = $request->description;
        $model->save();
        return response()->json(200);
    }
    public function search($keyword, Request $request)
    {
        $product = Product::where('name', $keyword);
        return response()->json($product);
    }
}