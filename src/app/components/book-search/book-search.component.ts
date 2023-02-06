import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchTerm: string;
  books: any[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.http.get(`http://localhost:3000/book/search?name=${this.searchTerm}`).subscribe((res)=>{
      console.log("res",res);
      this.books = res as any[];
    });
  }

}
