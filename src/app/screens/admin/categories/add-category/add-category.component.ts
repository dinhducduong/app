import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  constructor(private CategoryServices: CategoryService, private toastr: ToastrService) { }
  formCate: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
  })
  ngOnInit(): void {
  }
  onSubmit() {
    this.CategoryServices.addCategory(this.formCate.value).subscribe((data => {
      this.toastr.success('Thành công', 'Thông báo');
    }))
  }
}
