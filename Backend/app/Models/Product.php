<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [

        'id',
        'category_id',
        'name',
        'price',
        'images',
        'size',
        'color',
        'quantity',
        'description',
    ];
}