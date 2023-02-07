import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { 


  }

  add(category:any){
    return this.http.post("http://localhost:3000/category",category);
  }

  update(id:number,category:any){
    return this.http.put(`http://localhost:3000/category/${id}`,category);
  }
}
