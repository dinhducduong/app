import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = [];
  cate: any = [];
  itemsCart: any = [];
  totalLength: any;
  listPage: number = 10;
  page: number = 1;
  constructor(private ProductService: ProductService, private CartServices: CartService, private toastr: ToastrService, private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.ProductService.getAll().subscribe(data => {
      this.product = data
    })
    this.CategoryService.getAll().subscribe(data => {
      this.cate = data
    })
  }
  filterCate(id: any) {
    this.ProductService.getFilter(id).subscribe(data => {
      this.product = data
    })
  }
  filterAll() {
    this.ProductService.getAll().subscribe(data => {
      this.product = data
    })
  }
  addToCard(item: any) {
    let cartDataNull = localStorage.getItem('cart');
    let itemss: any = {
      id: item.id,
      category_id: item.category_id,
      name: item.name,
      price: item.price,
      images: item.images,
      size: "M",
      color: "Red",
      description: item.description,
      quantity: 1
    }
    if (cartDataNull == null) {
      let storeDataGet: any = [

      ];
      storeDataGet.push(itemss);
      localStorage.setItem('cart', JSON.stringify(storeDataGet));
      this.toastr.success('Đã thêm vào giỏ hàng', 'Thông báo');
    } else {
      var id = item.id;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('cart') || "{}");
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].id)) {
          this.itemsCart[i].quantity += 1;
          index = i;
          break;
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

  }
}
