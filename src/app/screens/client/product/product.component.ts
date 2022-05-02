import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = [];
  private items: any[] = [];
  private total: number = 0;

  constructor(private ProductService: ProductService, private CartServices: CartService) { }

  ngOnInit(): void {
    this.ProductService.getAll().subscribe(data => {
      this.product = data
    })
  }
  postProduct(item: any) {
    this.ProductService.post(item).subscribe(data => {
      console.log(data);
    })
  }
  addToCard(item: any) {
    var item: any = {
      id: item.id,
      category_id: item.category_id,
      name: item.name,
      price: item.price,
      images: item.images,
      size: item.size,
      color: item.color,
      description: item.description,
      quantity: 1
    };
    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart') || "{}");
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let items: any = JSON.parse(cart[i]);
        if (items.id == item.id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: any = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }
}
