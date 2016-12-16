import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/memo">Memo</a>
    </nav>
    <router-outlet></router-outlet>
  ` 
})
export class AppComponent {
  title = 'Study Angular2'; 
}
