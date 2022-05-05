import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  countCart: any;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    let cart: any = JSON.parse(localStorage.getItem('cart') || "{}");
    this.countCart = cart;
  }

}
