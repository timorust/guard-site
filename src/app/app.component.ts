import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userIsOnline: boolean;

  constructor(private router:Router) {
    this.userIsOnline = localStorage.getItem('user') !== null;
  }


  setUser() {
    localStorage.setItem('user', 'timor');
    this.userIsOnline = true;
    this.router.navigateByUrl('/profile');
  }
}
