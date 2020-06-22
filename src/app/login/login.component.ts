import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  login(e) {
    this.loginService.signin(e.target.email.value, e.target.password.value);
    if (this.loginService.isAuth) {
      this.router.navigateByUrl('home');    
    }
  }

}
