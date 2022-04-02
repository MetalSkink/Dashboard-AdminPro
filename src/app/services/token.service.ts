import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

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

  public setAuthorities(authorities: string[]): void {
    localStorage.removeItem('authorities');
    localStorage.setItem('authorities', JSON.stringify(authorities));
  }

  public getAuthorities()  {
    this.roles = [];
    if (localStorage.getItem('authorities')) {
      JSON.parse(localStorage.getItem('authorities')||'{}').forEach((authority: any) => {
        this.roles.push(authority);
      });
    }
    return this.roles;
  }

  public logout(): void {
    localStorage.clear();
  }

}
