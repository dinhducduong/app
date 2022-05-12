import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { async } from '@firebase/util';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formProduct: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl('', [
      Validators.required,
    ]),
    quantity: new FormControl('', [
      Validators.required,
    ]),
    imageThum: new FormControl('', [
      Validators.required,
    ]),
    imageDetail: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
    category_id: new FormControl(''),
  })

  constructor(private fireStorage: AngularFireStorage, private ProductService: ProductService, private toastr: ToastrService, private CategoryService: CategoryService) { }
  templateFile: Array<any> = [];
  ImageDetail: any = [];
  ImageThumnail: any = [];
  file: any = [];
  files: any = [];
  cate: any = [];
  private basePath = '/uploads';
  ngOnInit(): void {
    this.CategoryService.getAll().subscribe(data => {
      this.cate = data
    })
  }
  saveFileDetail(event: any) {
    this.files = event.target.files;
  }
  saveFileThumail(event: any) {
    this.file = event.target.files[0];

  }

  addProduct() {

    const filePath = `${this.basePath}/${this.file.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    this.fireStorage.upload(filePath, this.file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadUrl => {
            this.ImageThumnail = downloadUrl
            localStorage.setItem('imgThum', this.ImageThumnail);
            this.toastr.success('Thành công', 'Thông báo');
          })
        })
      ).subscribe();
    for (var i = 0; i < this.files.length; i++) {
      let item = this.files[i];
      const filePath = `${this.basePath}/${item.name}`;
      const storageRef = this.fireStorage.ref(filePath);
      this.fireStorage.upload(filePath, this.files[i])
        .snapshotChanges()
        .pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadUrl => {
              this.ImageDetail.push({
                name: downloadUrl
              });
              localStorage.setItem('imgDetail', JSON.stringify(this.ImageDetail));
            })
          })
        ).subscribe();
    }

    setTimeout(() => {
      let urlDetail = JSON.parse(localStorage.getItem('imgDetail') || "{}");
      let dataProduct: any = {
        category_id: this.formProduct.value.category_id,
        name: this.formProduct.value.name,
        price: this.formProduct.value.price,
        images: localStorage.getItem('imgThum'),
        description: this.formProduct.value.description,
        quantity: this.formProduct.value.quantity,
        imagesDetail: urlDetail
      }

      this.ProductService.addProduct(dataProduct).subscribe((data => {

        localStorage.removeItem("imgThum");
        localStorage.removeItem("imgDetail");
      }));
    }, 8000);

  }
}
