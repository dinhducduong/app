import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: any = [];
  id: number = 0;
  valueColorSize: any;
  qnt: number = 0;
  constructor(private ProductService: ProductService, private ActivatedRoute: ActivatedRoute,) { }

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
  addToCart() {
    console.log(this.dataForm.value);
  }
  payMen(item: any) { }
  increaseQuantity() {
    this.qnt++;
    console.log(this.qnt);
  }
  decreaseQuantity() {
    this.qnt--;
  }
}
