import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Empleado {
  codigo: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl: string = ""; 

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl) {
    this.myAppUrl = baseUrl;
  }
    
  isAuth() {
    return localStorage.getItem("auth") != null
      && localStorage.getItem("auth").localeCompare("null") != 0;
  }

  signin(email: string, password: string) {
    let login = {
      usuario: email, password: password
    };
    // Validar email y password y obtener usuario

    /*
    let empleados = this.http.get <Empleado[]> (this.myAppUrl + 'api/Employee/Index')
      .subscribe(empleados => {
        //console.log('JSON empleados = ' + empleados);
        for(var i=0; i<=empleados.length; i++){
          console.log('Empleado ' + i + "= " + empleados[i]);
        }
      });
    */
   return this.http.get(this.myAppUrl + 'api/Employee/login/' + email + "/" + password);

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
