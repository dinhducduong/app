<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [

        'id',
        'name',
        'phone',
        'address',
        'totalPrice',
        'created_at',
        'updated_at',
    ];
}