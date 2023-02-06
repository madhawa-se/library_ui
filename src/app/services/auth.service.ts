import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: { email: string, password: string }) {
    return this.http.post("http://localhost:3000/auth/login", loginData).pipe(tap(res => this.setSession(res as { token: string, expiresIn: number })));
  }

  signup(signupData: { email: string, password: string }) {
    return this.http.post("http://localhost:3000/auth/signup", signupData);
  }

  private setSession(authResult: { token: string, expiresIn: number }) {
    localStorage.setItem('token', authResult.token);
  }

  public isLoggedIn() {
    const token=this.getToken();
    return (token)?true:false;
  }

  public getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

}
