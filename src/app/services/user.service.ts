import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersAPIResponse } from '../models/UsersApiResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<UsersAPIResponse> {
    return this.httpClient.get<UsersAPIResponse>(`${this.baseUrl}/users`);
  }

  public deleteUser(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}
