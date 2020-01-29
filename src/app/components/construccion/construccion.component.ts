import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.css']
})
export class ConstruccionComponent implements OnInit {
  timer = 0;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.progress();
    }, 2000);
    setInterval(() => {
      this.progress();
    }, 60 * 1000);
  }
  progress() {
    const fechaInicio = new Date('2020/01/29 00:00:00').getTime();
    const fechaFin = new Date('2020/02/07 17:59:59').getTime();
    let porcentaje: number;
    const fechaActual = new Date().getTime();
    const diferencia = fechaFin - fechaInicio;
    const resultado = diferencia / (1000 * 60 * 60 * 24);
    const operacionActual = fechaActual - fechaInicio;
    const diasPasados = operacionActual / (1000 * 60 * 60 * 24);
    if (diasPasados > 0) {
      const operacion = (diasPasados * 100) / resultado;
      if (Math.trunc(operacion) > 100) {
        porcentaje = 100;
        document.getElementById('progressBar').style.width = `${porcentaje}%`;
      } else {
        porcentaje = Math.trunc(operacion);
        document.getElementById('progressBar').style.width = `${operacion}%`;
      }
      const interval = setInterval(() => {
        if (this.timer < porcentaje) {
          this.timer++;
        } else {
          this.timer = porcentaje;
        }
        if (this.timer === porcentaje) {
          clearInterval(interval);
        }
      }, 30);
    }
  }
}
