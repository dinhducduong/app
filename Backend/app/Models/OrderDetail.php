<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = [

        'id',
        'id_order',
        'id_product',
        'name',
        'quantity',
        'size',
        'color',
        'price',
        'sumTotal',
        'created_at',
        'updated_at',
    ];
}