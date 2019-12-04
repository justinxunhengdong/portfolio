import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dong-router',
  templateUrl: './dong-router.component.html',
  styleUrls: ['./dong-router.component.css']
})
export class DongRouterComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
