import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { TiendaremeraComponent } from './componentes/tiendaremera/tiendaremera.component';
import { TiendatazaComponent } from './componentes/tiendataza/tiendataza.component';
import { TiendallaveroComponent } from './componentes/tiendallavero/tiendallavero.component';


const routes: Routes = [
 {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'inicio', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'tiendaremera', component:TiendaremeraComponent},
  {path: 'tiendataza', component:TiendatazaComponent},
  {path: 'tiendallavero', component:TiendallaveroComponent}  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
