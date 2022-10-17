import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './componentes/paginas/principal/principal.component';
import { RegistroComponent } from './componentes/paginas/registro/registro.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { TiendaprincipalComponent } from './componentes/paginas/tiendaprincipal/tiendaprincipal.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'tiendaprincipal', component:TiendaprincipalComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

