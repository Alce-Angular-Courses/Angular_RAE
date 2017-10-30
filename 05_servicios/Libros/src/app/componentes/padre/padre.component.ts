import { BooksService } from './../../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.booksService.buscar(this.sClave);
    this.sClave = '';
  }
}
