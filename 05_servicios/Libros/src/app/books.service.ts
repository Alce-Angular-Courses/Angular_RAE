import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  aLibros: Array<string>;

  constructor() { }

  buscar(clave: string) {
    this.aLibros = [
      'Angular facil',
      'Angular avanzado',
      'Encuantros con Angular',
      'Angula... la continuación'
    ];
    return this.aLibros;
  }
}
