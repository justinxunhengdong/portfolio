import { Component, OnInit, HostListener } from '@angular/core';
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
  resizeTimeout;

  ngOnInit(){
    this.checkIsMobile();
  }

  @HostListener('window:resize')
  onWindowResize() {
      //debounce resize, wait for resize to finish before doing stuff
      if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout((() => {
          console.log('Resize complete');
      }).bind(this), 500);
    }

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

  changeHeaderStatus(toOpen: boolean): void {
    if (toOpen) {
      this.isOpen = true;
      this.headerStatus = 'open';
    } else {
      this.isOpen = false;
      this.headerStatus = 'closed';
    }
  }

  checkIsMobile(): void {
      this.isMobile = $('#navbar-button').is(':visible');
  }

  onResize(event) {
    this.checkIsMobile();
 }

}
