import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];
  total: number = 0;
  totalPrice: number = 0;
  constructor() {

  }

  ngOnInit(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart') || "{}");
    for (var i = 0; i < cart.length; i++) {
      const item = JSON.parse(cart[i]);
      this.items.push({
        id: item.id,
        category_id: item.category_id,
        color: item.color,
        description: item.description,
        images: item.images,
        name: item.name,
        price: item.price,
        size: item.size,
        quantity: item.quantity,
        total: item.price * item.quantity
      });
      this.totalPrice += item.price * item.quantity
    }
  }

}
