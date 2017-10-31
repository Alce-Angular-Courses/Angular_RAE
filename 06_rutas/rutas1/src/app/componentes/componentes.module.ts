import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    LibrosComponent,
    AutoresComponent],
  exports: [
    HomeComponent,
    AboutComponent,
    LibrosComponent,
    AutoresComponent]
})
export class ComponentesModule { }
