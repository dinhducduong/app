import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  dataCate: any;
  constructor(private ActivatedRouter: ActivatedRoute, private CategoryServices: CategoryService) { }
  formCate: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
  })
  ngOnInit(): void {
    this.ActivatedRouter.params.subscribe((data => {
      this.CategoryServices.get(data['id']).subscribe((data => {
        this.dataCate = data;
      }))
    }))

  }
  onSubmit() {
    Swal.fire({
      title: 'Thông báo!!',
      text: "Bạn có chắc muốn cập nhật!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ActivatedRouter.params.subscribe((data => {
          this.CategoryServices.editCategory(this.formCate.value, data['id']).subscribe((data => {
          }))
        }))
        Swal.fire(
          'Cập nhật thành công!',
          '!!!!!!!!!!!.',
          'success'
        )
      }
    })


  }
}
