import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/layouts/header/header.component';
import { PrincipalComponent } from './componentes/pages/principal/principal.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { RegistroComponent } from './componentes/pages/registro/registro.component';
import { TiendaprincipalComponent } from './componentes/pages/tiendaprincipal/tiendaprincipal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    LoginComponent,
    RegistroComponent,
    TiendaprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
