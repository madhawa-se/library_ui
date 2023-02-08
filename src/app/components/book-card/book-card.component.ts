import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/models/book-interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: any;

  constructor() { }

  ngOnInit(): void {
    console.log("book.genre.name ",this.book);
  }

}
