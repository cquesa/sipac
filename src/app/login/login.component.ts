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
    let login = {
      usuario: e.target.email.value, password: e.target.password.value
    };
    this.loginService.signin(e.target.email.value, e.target.password.value)
    .subscribe(datos => {
      if (!datos[1]) {
        alert('Credenciales erróneas');
        return;
      }
      console.log('login datos ' + datos);
      let usuario = {
        empleado: datos[1], nombre: datos[0], perfil: datos[4], gerente: datos[3], unidad: datos[5]
      };
      console.log('usuario logado ' + usuario);
      localStorage.setItem("auth", JSON.stringify(login));
      localStorage.setItem("usuario", JSON.stringify(usuario));
      this.router.navigateByUrl('home');          
   },
   error => {
      alert('Error: ' + error.message);
   });

  }

}
