import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setUserName(userName: string): void {
    localStorage.removeItem('userName');
    localStorage.setItem('userName', userName);
  }

  public getUserName() {
    return localStorage.getItem('userName');
  }

  public logout(): void {
    localStorage.clear();
  }

}
