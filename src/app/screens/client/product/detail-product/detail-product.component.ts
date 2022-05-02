import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product: any = [];
  id: number = 0;
  constructor(private ProductService:ProductService, private ActivatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.id = Number(data['id']);
        this.ProductService.get(this.id).subscribe(data => {
          this.product = data
      })
    })

  }

}
