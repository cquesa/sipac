import { Component, OnInit } from '@angular/core';
import { GastosInterface } from './model/gastosInterface';
import { BsDaterangepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { GastosService } from './gastos.service';
import {  ActivatedRoute, ParamMap } from '@angular/router';

let GASTOS_EMPLEADO:GastosInterface[] = [];


const PROYECTOS = [
  {
    idProyecto : 1,
    dsProyecto : 'CMMA'
  },
  {
    idProyecto : 2,
    dsProyecto : 'Proyecto 1'
  },
  {
    idProyecto : 3,
    dsProyecto : 'Proyecto 2'
  },
  {
    idProyecto : 4,
    dsProyecto : 'Interproyecto'
  },
  
]

const GASTOS_EMPLEADO_ABRIL:GastosInterface[]  = [
  {
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    //fcDesde: '01/01/2020',
    //fcHasta: '30/01/2020',
    rangoFechas: [new Date('04/01/2020'), new Date('04/30/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un restaurante',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    proyecto : {
      idProyecto: 4,
      dsProyecto: 'Interproyecto'
    },
    //fcDesde: '27/02/2020',
    //fcHasta: '29/02/2020',
    rangoFechas: [new Date('04/27/2020'), new Date('04/29/2020')],
    tipoGasto : {
      idTipoGasto: 2,
      dsTipoGasto: 'Alojamiento'
    },
    nmUnidades: 1,
    nmImporte: 300.00,
    nmTotal: 300.00,
    dsDescripcion: '',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    proyecto : {
      idProyecto: 3,
      dsProyecto: 'Proyecto 2'
    },
    //fcDesde: '09/03/2020',
    //fcHasta: '30/03/2020',
    rangoFechas: [new Date('04/09/2020'), new Date('04/30/2020')],
    tipoGasto : {
      idTipoGasto: 2,
      dsTipoGasto: 'Taxi'
    },
    nmUnidades: 20,
    nmImporte: 10.00,
    nmTotal: 200.00,
    dsDescripcion: '',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    proyecto : {
      idProyecto: 2,
      dsProyecto: 'Proyecto 1'
    },
    //fcDesde: '15/04/2020',
    //fcHasta: '30/03/2020',
    rangoFechas: [new Date('04/15/2020'), new Date('04/30/2020')],
    tipoGasto : {
      idTipoGasto: 2,
      dsTipoGasto: 'Transporte'
    },
    nmUnidades: 10,
    nmImporte: 15.00,
    nmTotal: 150.00,
    dsDescripcion: '',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  }
];

const GASTOS_EMPLEADO_MAYO:GastosInterface[]  = [
  {
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    rangoFechas: [new Date('05/05/2020'), new Date('05/15/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    rangoFechas: [new Date('05/16/2020'), new Date('05/30/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En OTRO bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  }  
];

const GASTOS_EMPLEADO_JUNIO:GastosInterface[]  = [
  {
    proyecto : {
      idProyecto: 1,
      dsProyecto: 'CMMA'
    },
    rangoFechas: [new Date('06/05/2020'), new Date('06/15/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En un bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    proyecto : {
      idProyecto: 2,
      dsProyecto: 'Proyecto 1'
    },
    rangoFechas: [new Date('06/21/2020'), new Date('06/26/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En OTRO bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  },
  {
    proyecto : {
      idProyecto: 4,
      dsProyecto: 'Interproyecto'
    },
    rangoFechas: [new Date('06/28/2020'), new Date('06/30/2020')],
    tipoGasto : {
      idTipoGasto: 1,
      dsTipoGasto: 'Comida'
    },
    nmUnidades: 1,
    nmImporte: 100.00,
    nmTotal: 100.00,
    dsDescripcion: 'En OTRO bar',
    estado : {
      idEstado: 0,
      dsEstado: 'Borrador'
    }
  }
];

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {


  bsConfig: Partial<BsDaterangepickerConfig>;

  proyecto = '';
  estado:string = "Borrador";
  rangoFechas: Date[];
  empleado: string;
  periodo: number;
  
  fechaActual = new Date(); 
  minDate:Date;
  maxDate:Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private localeService: BsLocaleService,
    private gastosService: GastosService) {
    defineLocale('es', esLocale);
    this.localeService.use('es');
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
        }      
      }
    );

    if (this.periodo == null) {
      this.periodo = this.fechaActual.getMonth()+1;
    }

    this.minDate = new Date(this.fechaActual.getFullYear(), this.periodo-1, 1); 
    this.maxDate = new Date(this.fechaActual.getFullYear(), this.periodo, 0);

    //this.minDate = new Date(('0'+this.periodo).slice(-2) + '/01/2020');
    //this.maxDate = new Date(('0'+this.periodo).slice(-2) + '/30/2020');


    this.bsConfig = Object.assign({}, 
      { isAnimated: true },
      { adaptivePosition: true },
      { containerClass: 'theme-default' },
      { showWeekNumbers: false },
      { minDate: this.minDate},
      { maxDate: this.maxDate},
      { displayOneMonthRange: true},
      { displayMonths: 1}
      );
    }

  seleccionPeriodo(evt) {
    this.periodo = evt;
    this.bsConfig.minDate = new Date(this.fechaActual.getFullYear(), this.periodo -1, 1); 
    this.bsConfig.maxDate = new Date(this.fechaActual.getFullYear(), this.periodo, 0);
  }

  getProyectos() {
    return PROYECTOS;
  }

  seleccionProyecto(evt) {
    console.log('TO DO seleccionProyecto', evt);
  }

  listaGastos() {
    // Hacer llamada al backend para obtener listado de gastos empleado para el mes seleccionado
    if (this.periodo == 4) {
      GASTOS_EMPLEADO = GASTOS_EMPLEADO_ABRIL;
      return GASTOS_EMPLEADO;
    }
    if (this.periodo == 5) {
      GASTOS_EMPLEADO = GASTOS_EMPLEADO_MAYO;
      return GASTOS_EMPLEADO;
    }
    if (this.periodo == 6) {
      GASTOS_EMPLEADO = GASTOS_EMPLEADO_JUNIO;
      return GASTOS_EMPLEADO;
    }
    if (this.periodo == 7) {
      // this.gastosService.getAll(this.periodo);
      GASTOS_EMPLEADO = this.gastosService.getAll(this.periodo);;
    }


  }


  annadir() {
    let gasto:GastosInterface;
    
    gasto = {
      proyecto : {
        idProyecto: null,
        dsProyecto: ''
      },
      rangoFechas: [new Date(''),new Date('')],
      tipoGasto : {
        idTipoGasto: null,
        dsTipoGasto: ''
      },
      nmUnidades: 0,
      nmImporte: 0,
      nmTotal: 0,
      dsDescripcion: '',
      estado : {
        idEstado: null,
        dsEstado: 'Borrador'}
    }

    GASTOS_EMPLEADO.push(gasto); 
  }

  borrar(i:number) {
    // Hacer llamada al backend para borrar el gasto con índice i
    this.gastosService.borrarGasto(i);
    GASTOS_EMPLEADO.splice(i, 1);
  }

  guardar() {
    // Hacer llamada al backend para guardar los gastos
    this.gastosService.guardarGastos(GASTOS_EMPLEADO);
    console.log(GASTOS_EMPLEADO);
    console.log(JSON.stringify(GASTOS_EMPLEADO));
  }

  enviar() {
    this.gastosService.enviarGastos(GASTOS_EMPLEADO);
    this.listaGastos();
  }

  cancelar() {
  }

  imprimir() {

  }

onChange(index:number) {
  let fechaString = this.rangoFechas[0];
  //GASTOS_EMPLEADO[index].fcDesde;
}

actualizaTotal(index:number) {
  GASTOS_EMPLEADO[index].nmTotal = GASTOS_EMPLEADO[index].nmUnidades * GASTOS_EMPLEADO[index].nmImporte;
}

}