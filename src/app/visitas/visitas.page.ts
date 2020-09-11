import { Component, OnInit } from '@angular/core';
import { HEROES, VISITAS } from '../mock-heroes';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  lis = VISITAS;
  constructor() { }

  ngOnInit() {
  }

}
