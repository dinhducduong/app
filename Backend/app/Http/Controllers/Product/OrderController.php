<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function order(Request $request)
    {
        $id_order = Order::insertGetId(
            [
                'name' => $request->name,
                'phone' => $request->phone,
                'address' => $request->address,
                'totalPrice' => $request->totalPrice,
            ]
        );
        foreach ($request->cart as $key => $value) {
            $model = new OrderDetail();
            $model->id_order = $id_order;
            $model->id_product = $value['id'];
            $model->name = $value['name'];
            $model->quantity = $value['quantity'];
            $model->size = $value['size'];
            $model->color = $value['color'];
            $model->price =  $value['price'];
            $model->sumTotal =  $value['price'] * $value['quantity'];
            $model->save();
        }

        return response()->json($request);
    }
}