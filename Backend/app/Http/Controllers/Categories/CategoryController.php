<?php

namespace App\Http\Controllers\Categories;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        $cate = Categories::all();
        return response()->json($cate);
    }

    public function create(Request $request)
    {
        $model = new Categories();
        $model->name = $request->name;
        $model->save();
        return response()->json($request);
    }


    public function store($id, Request $request)
    {
        $cate = Categories::find($id);
        return response()->json($cate);
    }


    public function show($id)
    {
        //
    }


    public function edit($id, Request $request)
    {
        $cate = Categories::find($id);
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
        Categories::destroy($id);
        return response()->json(200);
    }
}