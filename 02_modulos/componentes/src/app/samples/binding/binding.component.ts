import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Encapsulation utilizando el valor por defecto

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BindingComponent implements OnInit {

  sNombre: string;
  nEdad: number;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nEdad = 20;
  }

  // Manejador del evento click del boton borrar
  btnBorrar (oEvento) {
    this.sNombre = '';
    console.log(oEvento);
  }
}

