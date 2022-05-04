import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {


  }
  btn() {
    this.toastr.error('This is a success message', 'Tada');
  }
}
