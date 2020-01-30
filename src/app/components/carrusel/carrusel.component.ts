import { Component, OnInit } from '@angular/core';

declare var $;
declare var jQuery;

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.carrusel();
  }

  carrusel() {}
}
