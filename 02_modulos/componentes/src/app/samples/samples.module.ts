import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { BindLocalComponent } from './bind-local/bind-local.component';
import { ListaComponent } from './lista/lista.component';
import { Lista4Component } from './lista4/lista4.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BindingComponent,
    BindLocalComponent,
    ListaComponent,
    Lista4Component
  ],
  exports: [
    BindingComponent,
    BindLocalComponent,
    ListaComponent,
    Lista4Component
  ]
})
export class SamplesModule { }
