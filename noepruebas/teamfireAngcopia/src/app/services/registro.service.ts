import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registro } from './registro';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {
API: string='http://localhost:3900/api/registro';
  constructor(private clienteHttp:HttpClient) { }

  AgregarRegistro(datosRegistro:registro):Observable<any>{
    return this.clienteHttp.post(this.API,datosRegistro);
  }
}
