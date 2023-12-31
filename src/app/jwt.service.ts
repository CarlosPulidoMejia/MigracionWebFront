import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) {}


  login() {
    return this.httpClient.post<{access_token:  string}>('localhost:8080/login', {'username':'ClienteSpei','password':'Migracion'}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
    }))
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }




}
