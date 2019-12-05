import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dong-header',
  templateUrl: './dong-header.component.html',
  styleUrls: ['./dong-header.component.css']
})
export class DongHeaderComponent implements OnInit {

  headerStatus: string;
  isOpen = false;
  isMobile = false;

  constructor(private router: Router) {
    router.events.subscribe(e => {
      console.log(e);
      if (e instanceof NavigationEnd) {
        if(e.url === '/') {
          this.changeHeaderStatus(true);
        } else {
          this.changeHeaderStatus(false);
        }
      }
    });
  }

  ngOnInit() {
  }

  determineWidth(){

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
