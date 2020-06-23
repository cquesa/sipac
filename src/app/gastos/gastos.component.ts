import { Component, OnInit } from '@angular/core';
import { GastosInterface } from './model/gastosInterface';
import { ActivatedRoute, ParamMap } from '@angular/router';

const GASTOS_EMPLEADO:GastosInterface[]  = [
  {
    idProyecto: 1,
    dsProyecto: 'CMMA',
    fcDesde: '01/01/2020',
    fcHasta: '30/01/2020',
    idTipoGasto: 1,
    dsTipoGasto: 'Comida',
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un restaurante',
    idEstado: 0,
    dsEstado: 'Borrador'
  },
  {
    idProyecto: 5,
    dsProyecto: 'Interproyecto',
    fcDesde: '27/02/2020',
    fcHasta: '29/02/2020',
    idTipoGasto: 2,
    dsTipoGasto: 'Alojamiento',
    nmUnidades: 1,
    nmImporte: 300.00,
    nmTotal: 300.00,
    dsDescripcion: '',
    idEstado: 0,
    dsEstado: 'Borrador'
  },
  {
    idProyecto: 1,
    dsProyecto: 'CMMA',
    fcDesde: '09/03/2020',
    fcHasta: '30/03/2020',
    idTipoGasto: 2,
    dsTipoGasto: 'Taxi',
    nmUnidades: 20,
    nmImporte: 10.00,
    nmTotal: 200.00,
    dsDescripcion: '',
    idEstado: 0,
    dsEstado: 'Borrador'
  },
  {
    idProyecto: 1,
    dsProyecto: 'CMMA',
    fcDesde: '15/04/2020',
    fcHasta: '30/03/2020',
    idTipoGasto: 2,
    dsTipoGasto: 'Transporte',
    nmUnidades: 10,
    nmImporte: 15.00,
    nmTotal: 150.00,
    dsDescripcion: '',
    idEstado: 0,
    dsEstado: 'Borrador'
  }
];



@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {
  // Empleado y periodo
  empleado: string;
  periodo: number;	
  
  proyecto = '';
  estado:string = "Borrador";
  rangoFechas: Date[];
  fechas: Date[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parametros: ParamMap) => {
        let empleado = parametros.get('empleado');
        let periodo = parametros.get('periodo');
        if (empleado) {
          this.empleado = empleado;
        }
        if (periodo) {
          this.periodo = parseInt(periodo);
        }      }
    );
  }	

  listaGastos() {
    // Hacer llamada al backend para obtener listado de gastos empleado
    return GASTOS_EMPLEADO;
  }

  annadir() {
    let gasto;
    
    gasto = {
      idProyecto: '',
      dsProyecto: '',
      fcDesde: '',
      fcHasta: '',
      idTipoGasto: '',
      dsTipoGasto: '',
      nmUnidades: '0',
      nmImporte: '0',
      nmTotal: '0',
      dsDescripcion: '',
      idEstado: '',
      dsEstado: 'Borrador'
    }

    GASTOS_EMPLEADO.push(gasto); 
  }

  borrar(i) {
    GASTOS_EMPLEADO.splice(i, 1);
  }

  guardar() {
    this.fechas;
    this.rangoFechas;
    console.log(GASTOS_EMPLEADO);
  }

  enviar() {
  }

  cancelar() {
  }

  imprimir() {

  }

onChange(index:number) {
  let fechaString = this.rangoFechas[0];
  GASTOS_EMPLEADO[index].fcDesde;
}

seleccionPeriodo(evt) {
  console.log('TO DO seleccionPeriodo', evt);
}

}