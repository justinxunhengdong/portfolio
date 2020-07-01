import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slide', [
      transition('* => *', [useAnimation(slideInLeft, {
        params: { timing: 0.3 }
      })
    ]),
      transition('* <=> *', [useAnimation(slideInRight, {
        params: { timing: 0.3 }
      })
    ])
  ])
]



})
export class AppComponent {
  title = 'Justin Dong: UX Designer';
}


