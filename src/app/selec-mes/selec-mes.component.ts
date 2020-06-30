import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selec-mes',
  templateUrl: './selec-mes.component.html',
  styleUrls: ['./selec-mes.component.scss']
})
export class SelecMesComponent implements OnInit {
  empleados = [
    {valor: 'cquesadag', muestraValor:'Carlos Quesada GalÃ¡n'},
    {valor: 'drodriguezu', muestraValor:'Domingo RodrÃ­guez Urbita'},
    {valor: 'jgarciab', muestraValor:'Jesus GarcÃ­a Bermejo'}
  ];
  
  periodos = [];

  @Input() titulo:string;
  @Input() empleado:string;
  @Input() periodo:number;

  periodoSel:number;
  nombre:string;
  @Output() periodoEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.nombre = 'Domingo RodrÃ­guez Urbita';
    this.inicializarPeriodos();
    this.periodoSel = this.periodos[1].valor;
    if (this.periodo) {
      this.periodoSel = this.periodo;
    } 
    if (this.empleado) {
      for (let aux of this.empleados) {
        if (aux.valor == this.empleado) {
          this.nombre = aux.muestraValor;
          break;
        }
      }
    }
  }

  inicializarPeriodos(){
    var anyo = new Date().getFullYear();
    var mes = new Date().getMonth();
    
   for (let i=(mes - 1); i<=(mes + 1); i++){
      switch (i){
        case 0:
          this.periodos.push({valor:i, muestraValor:'enero - ' + anyo});
          break;
        case 1:
          this.periodos.push({valor:i, muestraValor:'febrero - ' + anyo});
          break;
        case 2:
          this.periodos.push({valor:i, muestraValor:'marzo - ' + anyo});
          break;
        case 3:
          this.periodos.push({valor:i, muestraValor:'abril - ' + anyo});
          break;
        case 4:
          this.periodos.push({valor:i, muestraValor:'mayo - ' + anyo});
          break;
        case 5:
          this.periodos.push({valor:i, muestraValor:'junio - ' + anyo});
          break;
        case 6:
          this.periodos.push({valor:i, muestraValor:'julio - ' + anyo});
          break;
        case 7:
          this.periodos.push({valor:i, muestraValor:'agosto - ' + anyo});
          break;
        case 8:
          this.periodos.push({valor:i, muestraValor:'septiembre - ' + anyo});
          break;
        case 9:
          this.periodos.push({valor:i, muestraValor:'octubre - ' + anyo});
          break;
        case 10:
          this.periodos.push({valor:i, muestraValor:'noviembre - ' + anyo});
          break;
        case 11:
          this.periodos.push({valor:i, muestraValor:'diciembre - ' + anyo}); 
          break;
        default:
          if(i==-1){
            this.periodos.push({valor:11, muestraValor:'diciembre - ' + (anyo - 1)});
          }else{
            if(i==12){
              this.periodos.push({valor:0, muestraValor:'enero - ' + (anyo + 1)});
            }
          }
      }
    }
  }

  seleccionPeriodo(){
    this.periodoEvent.emit(this.periodoSel);
  }
}
