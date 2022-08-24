import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioreg: FormGroup
  RegistroService: any;
  constructor(
    public formulario: FormBuilder    ) { 
      this.formularioreg=this.formulario.group({
        usuario: [''],
        contrasena: [''],
        email: [''],
      
      })
    }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Enviar datos");
    console.log(this.formularioreg.value);
    this.RegistroService.AgregarRegistro(this.formularioreg.value).subscribe();
  }
}
