<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAll(Request $request)
    {
    }
    public function get($id, Request $request)
    {
    }

    public function create(Request $request)
    {
        $data = User::all();
        foreach ($data as $key => $value) {
            if ($value['email'] === $request->email) {
                return response()->json($value);
            } else {
                $model = new User();
                $model->name = $request->name;
                $model->email = $request->email;
                $model->save();
                return response()->json($request);
            }
        }
    }


    public function store($id, Request $request)
    {
    }


    public function show($id)
    {
        //
    }


    public function edit($id, Request $request)
    {
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id, Request $request)
    {
    }
}