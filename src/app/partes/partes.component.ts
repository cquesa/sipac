import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.scss']
})
export class PartesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
