import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  submitted: boolean = false;
  items: any;
  total: number = 0;
  totalPrice: number = 0;
  getCartDetails: any = [];

  constructor(private toastr: ToastrService, private CartService: CartService) {

  }
  formOrder: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+84-?)|0)?[0-9]{11}$')
    ]),

    address: new FormControl('', [
      Validators.required
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

  })

  ngOnInit(): void {
    this.loadCart();
    this.items = JSON.parse(localStorage.getItem('cart') || "{}");
    this.loadCart();
  }


  decreaseQuantity(item: any) {
    this.getCartDetails = JSON.parse(localStorage.getItem('cart') || "{}");
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === item.id) {
        if (item.quantity > 1) {
          if (this.getCartDetails[i].color === item.color) {
            if (this.getCartDetails[i].size === item.size) {
              this.getCartDetails[i].quantity = parseInt(item.quantity) - 1;
              this.toastr.success('Giảm số lượng thành công', 'Thông báo');
            }
          }
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
        if (this.getCartDetails[i].color === item.color) {
          if (this.getCartDetails[i].size === item.size) {
            this.getCartDetails[i].quantity = parseInt(item.quantity) + 1;
          }
        }
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
        images: item.images,
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
        if (items.size == item.size) {
          if (items.color == item.color) {
            cart.splice(i, 1);
            break;
          }
        }

      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.toastr.success('Xóa sản phẩm thành công', 'Thông báo');
    this.loadCart();
  }
  payMen() {
    Swal.fire({
      title: 'Thông báo!!',
      text: "Bạn có chắc muốn đặt hàng!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đặt hàng!'
    }).then((result) => {
      if (result.isConfirmed) {
        let cart = JSON.parse(localStorage.getItem('cart') || "{}");
        let info: any = {
          name: this.formOrder.value.name,
          phone: this.formOrder.value.phone,
          address: this.formOrder.value.address,
          totalPrice: this.totalPrice,
          countCart: cart.length,
          cart: cart,
        }
        this.CartService.order(info).subscribe(data => {
        })
        Swal.fire(
          'Đặt hàng thành công!',
          'Cảm ơn đã tin tưởng.',
          'success'
        )
      }
    })
  }
}
