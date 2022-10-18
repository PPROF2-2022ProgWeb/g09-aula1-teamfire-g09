import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/layouts/header/header.component';
import { PrincipalComponent } from './componentes/paginas/principal/principal.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { RegistroComponent } from './componentes/paginas/registro/registro.component';
import { TiendaprincipalComponent } from './componentes/paginas/tiendaprincipal/tiendaprincipal.component';
import { TiendaremerasComponent } from './componentes/paginas/tiendaremeras/tiendaremeras.component';
import { TiendatazasComponent } from './componentes/paginas/tiendatazas/tiendatazas.component';
import { TiendallaverosComponent } from './componentes/paginas/tiendallaveros/tiendallaveros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    TiendaprincipalComponent,
    TiendaremerasComponent,
    TiendatazasComponent,
    TiendallaverosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
