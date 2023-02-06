import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { 


  }

  addBook(book:any){
    return this.http.post("http://localhost:3000/book",book);
  }

  
}
