import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: any = [];
  id: number = 0;
  valueColorSize: any;
  qnt: number = 1;
  modelColor: string = 'Red';
  modelSize: string = 'M';
  itemsCart: any = [];
  constructor(private ProductService: ProductService, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.id = Number(data['id']);
      this.ProductService.get(this.id).subscribe(data => {
        this.product = data
      })
    })
  }
  dataForm: FormGroup = new FormGroup({
    size: new FormControl(''),
    color: new FormControl(''),
    quantity: new FormControl('')
  })
  formSize: Array<any> = [
    1, 2, 3, 4
  ];
  formText: Array<any> = [
    'M',
    'L',
    'XL',
    'XXL',
  ];
  select_size(size: number) {
    this.valueColorSize = size;
  }
  addToCart(item: any) {
    this.ProductService.get(this.id).subscribe(data => {
      let cartDataNull = localStorage.getItem('cart');
      let itemss: any = {
        id: item.id,
        category_id: item.category_id,
        name: item.name,
        price: item.price,
        images: item.images,
        size: this.dataForm.value.size,
        color: this.dataForm.value.color,
        description: item.description,
        quantity: this.dataForm.value.quantity
      }
      if (cartDataNull == null) {
        let storeDataGet: any = [

        ];
        storeDataGet.push(itemss);
        localStorage.setItem('cart', JSON.stringify(storeDataGet));
        this.toastr.success('Đã thêm vào giỏ hàng', 'Thông báo');
      } else {
        let index: number = -1;
        this.itemsCart = JSON.parse(localStorage.getItem('cart') || "{}");
        for (let i = 0; i < this.itemsCart.length; i++) {
          if (parseInt(item.id) === parseInt(this.itemsCart[i].id)) {
            if (this.dataForm.value.size === this.itemsCart[i].size) {
              if (this.dataForm.value.color === this.itemsCart[i].color) {
                this.itemsCart[i].quantity += this.dataForm.value.quantity;
                this.itemsCart[i].size = this.dataForm.value.size;
                this.itemsCart[i].color = this.dataForm.value.color;
                index = i;
                break;
              } else {
                let itemss: any = {
                  id: item.id,
                  category_id: item.category_id,
                  name: item.name,
                  price: item.price,
                  images: item.images,
                  size: this.dataForm.value.size,
                  color: this.dataForm.value.color,
                  description: item.description,
                  quantity: this.dataForm.value.quantity
                }
                let storeDataGet: any = [];
                storeDataGet.push(itemss);
                localStorage.setItem('cart', JSON.stringify(storeDataGet));
              }

            }
          }
        }
        if (index == -1) {
          this.itemsCart.push(itemss);
          localStorage.setItem('cart', JSON.stringify(this.itemsCart));
          this.toastr.success('Đã thêm vào giỏ hàng', 'Thông báo');
        } else {
          localStorage.setItem('cart', JSON.stringify(this.itemsCart));
          this.toastr.success('Đã thêm vào giỏ hàng', 'Thông báo');
        }
      }
    })
  }

  increaseQuantity() {
    this.qnt++
  }
  decreaseQuantity() {
    if (this.qnt > 1) {
      this.qnt--;
    }
  }
}
