import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularDemo';
  loggedIn = false;
  @ViewChild('login') login: LoginComponent;
  @ViewChild('navbar') public myNav;

  constructor(private router: Router) {

  }
  onLogoutClick() {
    this.router.navigate(['./']);
    this.loggedIn = false;
    this.login.clearData();
  }

  ngOnInit() {

  }

  onLoginSuccess() {
    this.loggedIn = true;
    this.router.navigate(['./users']);
  }
}
