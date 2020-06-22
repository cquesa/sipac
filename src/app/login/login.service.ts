import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  
  isAuth() {
    return localStorage.getItem("auth") != null;
  }

  signin(email: string, password: string) {
    let login = {
      usuario: email, password: password
    };
    localStorage.setItem("auth", JSON.stringify(login));
  }

  logout() {
    localStorage.setItem("auth", null);
  }

}
