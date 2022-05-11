<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductDetail;
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
    public function getImage($id, Request $request)
    {

        $img = ProductDetail::where('id_pro', $id)->get();


        return response()->json($img);
    }
    public function create(Request $request)
    {
        $id_pro = Product::insertGetId(
            [
                'category_id' => $request->category_id,
                'name' => $request->name,
                'price' => $request->price,
                'images' => "$request->images",
                'description' => $request->description,
                'quantity' => $request->quantity,
            ]
        );

        foreach ($request->imagesDetail as $value) {
            $model = new ProductDetail();
            $model->id_pro = $id_pro;
            $model->url = $value['name'];
            $model->save();
        }
        return response()->json($request);
    }


    public function store($id, Request $request)
    {
        $cate = Product::find($id);
        return response()->json($cate);
    }


    public function show($id)
    {
        //
    }


    public function edit($id, Request $request)
    {
        $cate = Product::find($id);
        $cate->name = $request->name;
        $cate->save();
        return response()->json($request);
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id, Request $request)
    {
        Product::destroy($id);
        return response()->json(200);
    }
}