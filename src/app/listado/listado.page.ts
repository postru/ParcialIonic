import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  lis = HEROES;
  
  

  constructor() { }

  ngOnInit() {
  }

 
}
