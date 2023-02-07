import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { 


  }

  addAuthor(author:any){
    return this.http.post("http://localhost:3000/auther",author);
  }

  updateAuthor(id:number,author:any){
    return this.http.put(`http://localhost:3000/auther/${id}`,author);
  }
}
