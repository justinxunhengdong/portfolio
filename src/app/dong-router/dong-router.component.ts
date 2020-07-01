import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dong-router',
  templateUrl: './dong-router.component.html',
  styleUrls: ['./dong-router.component.css']
})
export class DongRouterComponent implements OnInit {
  navbarOpen = false;
  resizeTimeout;
  isMobile = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit() {
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

  checkIsMobile(): void {
      this.isMobile = $('#navbar-button').is(':visible');
    }


  onResize(event) {
    this.checkIsMobile();
 }
}
