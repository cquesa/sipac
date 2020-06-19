import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calgastos',
  templateUrl: './calgastos.component.html',
  styleUrls: ['./calgastos.component.scss']
})
export class CalgastosComponent implements OnInit {

  model: NgbDateStruct;

  constructor() { }

  ngOnInit() {
  }
}
