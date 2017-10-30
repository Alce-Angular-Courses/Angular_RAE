import { Usuario, Impresora, Departamento } from './form.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  @ViewChild ('myform') formulario: any;
  user: Usuario;
  impresoraSelect: Impresora;
  aImpresoras: Array<Impresora>;
  dptoSelect: Departamento;
  aDepartamentos: Array<Departamento>;
  isColor: boolean;
  isClaro: boolean;

  constructor() { }

  ngOnInit() {

    this.user = {nombre: '', apellidos: '',  telefono: ''};
    this.aImpresoras = [
      {nombre: 'HP', codigo: '001'},
      {nombre: 'Brother', codigo: '002'},
      {nombre: 'Cannon', codigo: 3},
      {nombre: 'Lexmark', codigo: '004'}
    ];
    this.aDepartamentos = [
      {nombre: 'Marketing', codigo: 'MKT'},
      {nombre: 'Ventas', codigo: 'VNT'},
      {nombre: 'Finanzas', codigo: 'FNZ'},
      {nombre: 'Sistenas', codigo: 'SST'}
    ];

    console.log(this.formulario);
  }

  enviar() {
    console.log('Datos enviados');
  }

  borrar() {
    this.formulario.reset();
  }

  avisarPrint() {}

  avisarDepartamento() {}
}
