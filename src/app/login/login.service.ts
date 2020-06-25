import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  
  isAuth() {
    return localStorage.getItem("auth") != null
      && localStorage.getItem("auth").localeCompare("null") != 0;
  }

  signin(email: string, password: string) {
    let login = {
      usuario: email, password: password
    };
    // Validar email y password y obtener usuario
    let usuario = {
      empleado: 'cquesadag', nombre: 'Carlos Quesada Galán', perfil: 1
    };
    localStorage.setItem("auth", JSON.stringify(login));
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  logout() {
    localStorage.setItem("auth", null);
  }

  getUsuario() {
    let usuario = localStorage.getItem("usuario");
    return usuario != null
      && usuario.localeCompare("null") != 0 ? JSON.parse(usuario) : null ;
  }

  getPerfil() {
    let usuario = localStorage.getItem("usuario");
    return usuario != null
      && usuario.localeCompare("null") != 0 ? JSON.parse(usuario).perfil : null ;
  }

}
