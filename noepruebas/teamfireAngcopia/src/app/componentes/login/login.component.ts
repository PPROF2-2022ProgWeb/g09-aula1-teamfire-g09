import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: 'kevin',
    contrasena: '123'
  }
  constructor(
   
  ) {
    
   }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.user);
  
    }
  }

