import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Output() loginSuccess = new EventEmitter();
  constructor() { }
  @Input() userName: string;
  @Input() password: string;

  ngOnInit() {
  }

  clearData() {
    this.userName = '';
    this.password = '';
  }

  onLoginClick() {
    this.loginSuccess.emit(true);
  }

}
