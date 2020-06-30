import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor() { }

  getDiasMes(mes:number, anyo:number){
    var first = new Date(anyo, mes, 1);
    var last = new Date(anyo, mes + 1, 0);
    var indice:number = 0;
    let diasMes = [];
  
    //Se limpia el array para poder introducir los días de un mes
    if (diasMes.length > 0){
      for (var i=0; i<diasMes.length; i++){
        diasMes.splice(i, 1);
      }
    }
    
    for (var j=first.getDate(); j<=last.getDate(); j++){
      diasMes[indice] = j;
      indice = indice + 1;
    }

    return diasMes;
  }

  getDiasFinde(mes:number, anyo:number){
    var first = new Date(anyo, mes, 1);
    var last = new Date(anyo, mes + 1, 0);
    var indice:number = 0;
    let diasFinde = [];
    
    //Se limpia el array para poder introducir los días de un mes
    if (diasFinde.length > 0){
      for (var i=0; i<diasFinde.length; i++){
        diasFinde.splice(i, 1);
      }
    }

    for(var j=first.getDate(); j<=last.getDate(); j++){
      var diaFD = new Date(anyo, mes, j);
      if (diaFD.getDay() == 6 || diaFD.getDay() == 0){
        diasFinde[indice] = j;
        indice = indice + 1;
      }
    }
    
    return diasFinde;
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
    let horas = [];    

    //Se limpia el array para poder introducir los días de un mes
    if (horas.length > 0){
      for (var i=0; i<horas.length; i++){
        horas.splice(i, 1);
      }
    }

    for(var i=first.getDate(); i<=last.getDate(); i++){
      horas[indice] = 0;
      indice = indice + 1;
    }

    return horas;

  }

}
