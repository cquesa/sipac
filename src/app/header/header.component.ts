import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('login'); 
  }
}
