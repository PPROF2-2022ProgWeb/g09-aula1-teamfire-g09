import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './componentes/inicio/inicio.component';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { NavbarTiendaComponent } from './componentes/tienda/componentesTienda/navbar-tienda/navbar-tienda.component';
import { InicioTiendaComponent } from './componentes/tienda/componentesTienda/inicio-tienda/inicio-tienda.component';
import { NavbartiendaComponent } from './componentes/navbartienda/navbartienda.component';
import { TiendaremerasComponent } from './componentes/tiendaremeras/tiendaremeras.component';
import { TiendatazasComponent } from './componentes/tiendatazas/tiendatazas.component';
import { TiendallaverosComponent } from './componentes/tiendallaveros/tiendallaveros.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CursosComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    TiendaComponent,
    NavbarTiendaComponent,
    InicioTiendaComponent,
    NavbartiendaComponent,
    TiendaremerasComponent,
    TiendatazasComponent,
    TiendallaverosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
