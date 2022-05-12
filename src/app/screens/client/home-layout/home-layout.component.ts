import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  countCart: any;
  name: any;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    let cart: any = JSON.parse(localStorage.getItem('cart') || "{}");
    this.countCart = cart;
    let getName: any = JSON.parse(localStorage.getItem('user') || "{}");
    if (getName != null) {
      this.name = getName.name;
    }

  }

}
