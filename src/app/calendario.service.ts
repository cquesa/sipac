import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  diasMes = [];
  diasFinde = [];
  horas = [];

  constructor() { }

  getDiasMes(mes:number, anyo:number){
    var first = new Date(anyo, mes, 1);
    var last = new Date(anyo, mes + 1, 0);
    var indice:number = 0;

    //Se limpia el array para poder introducir los días de un mes
    if (this.diasMes.length > 0){
      for (var i=0; i<this.diasMes.length; i++){
        this.diasMes.splice(i, 1);
      }
    }
    
    for (var j=first.getDate(); j<=last.getDate(); j++){
      this.diasMes[indice] = j;
      indice = indice + 1;
    }

    return this.diasMes;
  }

  getDiasFinde(mes:number, anyo:number){
    var first = new Date(anyo, mes, 1);
    var last = new Date(anyo, mes + 1, 0);
    var indice:number = 0;
    
    //Se limpia el array para poder introducir los días de un mes
    if (this.diasFinde.length > 0){
      for (var i=0; i<this.diasFinde.length; i++){
        this.diasFinde.splice(i, 1);
      }
    }

    for(var j=first.getDate(); j<=last.getDate(); j++){
      var diaFD = new Date(anyo, mes, j);
      if (diaFD.getDay() == 6 || diaFD.getDay() == 0){
        this.diasFinde[indice] = j;
        indice = indice + 1;
      }
    }
    
    return this.diasFinde;
  }

  getMes(mes:number, anyo:number){
    var first = new Date(anyo, mes, 1);
    var last = new Date(anyo, mes + 1, 0);
/*
    let diasMes = new Array(last.getDay() + 1);
    diasMes.forEach(dia => dia = 0);
    return diasMes;
*/
    var indice:number = 0;

    //Se limpia el array para poder introducir los días de un mes
    if (this.horas.length > 0){
      for (var i=0; i<this.horas.length; i++){
        this.horas.splice(i, 1);
      }
    }

    for(var i=first.getDate(); i<=last.getDate(); i++){
      this.horas[indice] = 0;
      indice = indice + 1;
    }

    return this.horas;

  }

}
