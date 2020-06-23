import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDaterangepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';
import { Event } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-calgastos-ngx',
    templateUrl: './calgastos-ngx.component.html',
    styleUrls: ['./calgastos-ngx.component.scss']
})
export class CalgastosNgxComponent implements OnInit {

  @Output() _fechas = new EventEmitter<Date[]>();
  minDate = new Date('06/01/2020');
  maxDate = new Date('06/30/2020');
  bsConfig: Partial<BsDaterangepickerConfig>;
  bsRangeValue : Date[];

  @Input() fcDesde: string = "";
  @Input() fcHasta: string = "";
  
  myForm: FormGroup;

  constructor(
    private localeService: BsLocaleService,
    private formBuilder: FormBuilder) {

    defineLocale('es', esLocale);
    this.localeService.use('es');
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, 
      { isAnimated: true },
      { adaptivePosition: true },
      { containerClass: 'theme-default' },
      { showWeekNumbers: false },
      { minDate: this.minDate},
      { maxDate: this.maxDate},
      { displayOneMonthRange: true}
    );                                       

    //fecha = fecha.split('-').reverse().join('/');
    this.fcDesde = this.fcDesde.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/g,'$2/$1/$3');
    this.fcHasta = this.fcHasta.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/g,'$2/$1/$3');
    
    if (this.fcDesde != "" && this.fcHasta != "") {
      this.bsRangeValue = [new Date(this.fcDesde), new Date(this.fcHasta)];
    }

    this.myForm = this.formBuilder.group({
      date: null,
      range: null
    });
    
  }

  onSelectFecha(e:Event) {
    //console.log(e);
    if (this.bsRangeValue.length > 0) {
    this._fechas.emit(this.bsRangeValue); 
    }
  }



}
