import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private showHeader: Boolean = false;

  constructor(private router: Router) {
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login') {
            this.showHeader = false;
          } else {
            this.showHeader = true;
          }
        }
      });
    }
  
  title = 'Angular test';
}