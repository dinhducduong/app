import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product: any;
  cate: any;
  totalLength: any;
  listPage: number = 10;
  page: number = 1;
  constructor(private ProductService: ProductService, private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.ProductService.getAll().subscribe((data => {
      this.product = data;
      this.totalLength = data.length;
    }))
    this.CategoryService.getAll().subscribe((data => {
      this.cate = data;
    }))
  }
  remove(item: any) {
    Swal.fire({
      title: 'Thông báo!!',
      text: "Bạn có chắc muốn xóa!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProductService.remove(item).subscribe((data => {
          this.product = this.product.filter((items: any) => items.id != item);
        }))
        Swal.fire(
          'Xóa thành công!',
          '!!!!!!!!!!!.',
          'success'
        )
      }
    })

  }

}
