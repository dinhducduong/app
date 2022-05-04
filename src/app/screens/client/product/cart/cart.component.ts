import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];
  total: number = 0;
  totalPrice: number = 0;
  getCartDetails: any = [];
  constructor(private toastr: ToastrService, private CartService: CartService) {

  }

  ngOnInit(): void {
    let cart = JSON.parse(localStorage.getItem('cart') || "{}");
    this.items = cart;
    this.loadCart();
  }

  decreaseQuantity(item: any) {
    this.getCartDetails = JSON.parse(localStorage.getItem('cart') || "{}");
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === item.id) {
        if (item.quantity > 1) {
          this.getCartDetails[i].quantity = parseInt(item.quantity) - 1;
          this.toastr.success('Giảm số lượng thành công', 'Thông báo');

        } else {
          this.toastr.error('Giảm số lượng thất bại', 'Thông báo');
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  increaseQuantity(item: any) {
    this.getCartDetails = JSON.parse(localStorage.getItem('cart') || "{}");
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === item.id) {
        this.getCartDetails[i].quantity = parseInt(item.quantity) + 1;
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.getCartDetails));
    this.toastr.success('Tăng số lượng thành công', 'Thông báo');
    this.loadCart();
  }
  loadCart() {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart') || "{}");
    for (var i = 0; i < cart.length; i++) {
      let item = cart[i];
      this.items.push({
        id: item.id,
        category_id: item.category_id,
        name: item.name,
        price: item.price,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
      });
    }
    if (localStorage.getItem('cart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('cart') || "{}");
      this.totalPrice = this.getCartDetails.reduce(function (acc: any, val: any) {
        return acc + (val.price * val.quantity)
      }, 0)
    }
  }
  removeCart(item: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || "{}");
    for (var i = 0; i < cart.length; i++) {
      let items: any = cart[i];
      if (items.id == item.id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.toastr.success('Xóa sản phẩm thành công', 'Thông báo');
    this.loadCart();
  }
}
