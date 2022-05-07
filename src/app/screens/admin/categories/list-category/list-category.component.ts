import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  cate: any;
  totalLength: any;
  listPage: number = 10;
  page: number = 1;
  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.CategoryService.getAll().subscribe((data => {
      this.cate = data;
      this.totalLength = data.length;
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
        this.CategoryService.remove(item).subscribe((data => {
          this.cate = this.cate.filter((items: any) => items.id != item);
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
