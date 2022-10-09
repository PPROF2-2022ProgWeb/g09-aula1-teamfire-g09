import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private URL = 'http://localhost:3900';
  constructor(private http: HttpClient) { }

  singin(user:any) {
    return this.http.post('${this.URL}/api/registros', user);
  }
}
