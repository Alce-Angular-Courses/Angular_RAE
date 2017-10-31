import { AboutComponent } from './componentes/about/about.component';
import { AutoresComponent } from './componentes/autores/autores.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'acercade', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
