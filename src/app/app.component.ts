import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  template: `
    <div *ngIf="!isLoggedIn">
      <app-login (loginSuccess)="onLoginSuccess($event)"></app-login>
    </div>
    <div *ngIf="isLoggedIn">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn = false;

  onLoginSuccess(loggedIn: boolean) {
    this.isLoggedIn = loggedIn;
  }
}
