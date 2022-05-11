import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }
  name: any;
  ngOnInit(): void {
    const data = JSON.parse(<any>localStorage.getItem("user"));
    this.name = data.name
  }

}
