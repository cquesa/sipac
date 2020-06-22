import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selec-mes',
  templateUrl: './selec-mes.component.html',
  styleUrls: ['./selec-mes.component.scss']
})
export class SelecMesComponent implements OnInit {

  periodos = [
    {valor: 4, muestraValor:'abril - 2020'},
    {valor: 5, muestraValor:'mayo - 2020'},
    {valor: 6, muestraValor:'junio - 2020'},
    {valor: 7, muestraValor:'julio - 2020'}
  ];

  @Input() nombre:string;
  seleccionada:number = this.periodos[0].valor;;
  @Output() resultado:string = null;

  constructor() { }

  ngOnInit(): void {
    this.nombre = 'Miguel Ángel Llamas Mezquita';
  }

  optSeleccion(){
    switch(this.seleccionada){
      case 4: this.resultado = this.periodos[0].muestraValor;
        break;
      case 5: this.resultado = this.periodos[1].muestraValor;
        break;
      case 6: this.resultado = this.periodos[2].muestraValor;
        break;
      case 7: this.resultado = this.periodos[3].muestraValor;
        break;
    }
  }
}
