import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-dong-header',
  templateUrl: './dong-header.component.html',
  styleUrls: ['./dong-header.component.css']
})
export class DongHeaderComponent implements OnInit {

  headerStatus: string;
  isOpen = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  changeHeaderStatus(toOpen: boolean): void {
    if (toOpen) {
      this.isOpen = true;
      this.headerStatus = 'open';
    } else {
      this.isOpen = false;
      this.headerStatus = 'closed';
    }
  }


}
