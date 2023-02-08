import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../entity/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userSubject = new BehaviorSubject<User>(null);
  private user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchUser() {
    if( this.isLoggedIn()){
      this.http.get("http://localhost:3000/auth/me").subscribe((res)=>{
        this.userSubject.next(res as User);
        console.log("real ",res);
      });
    }
  }

  login(loginData: { email: string, password: string }) {
    return this.http.post("http://localhost:3000/auth/login", loginData).pipe(
      tap(res => {
        this.setSession(res as { token: string, expiresIn: number }),
        this.fetchUser()
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);

  }

  signup(signupData: { email: string, password: string }) {
    return this.http.post("http://localhost:3000/auth/signup", signupData);
  }

  private setSession(authResult: { token: string, expiresIn: number }) {
    localStorage.setItem('token', authResult.token);
  }

  public isLoggedIn() {
    const token = this.getToken();
    return (token) ? true : false;
  }

  public getToken() {
    const token = localStorage.getItem("token");
    return token;
  }

}
