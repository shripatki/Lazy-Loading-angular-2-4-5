import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav>
    <a routerLink=''>Home</a>
    <a routerLink='admin'>Admin</a>
    <a routerLink='candidate'>candidate</a>
    <a routerLink='recruiter'>recruiter</a>
  </nav>
  <router-outlet></router-outlet>  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
