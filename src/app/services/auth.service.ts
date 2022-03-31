import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../auth/models/LoginUsuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth`, loginUsuario);
  }
}
