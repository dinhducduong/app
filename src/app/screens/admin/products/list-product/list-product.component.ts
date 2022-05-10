import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product: any;
  totalLength: any;
  listPage: number = 10;
  page: number = 1;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getAll().subscribe((data => {
      this.product = data;
      this.totalLength = data.length;
    }))
  }

}
