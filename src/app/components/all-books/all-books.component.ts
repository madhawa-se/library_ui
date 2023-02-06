import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddBookComponent } from '../models/add-book/add-book.component';
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  submissions=[
      {name:'Sadun',id:12,date:'2022-05-12',marks:'pending'},
      {name:'Akalanka',id:18,date:'2022-05-10',marks:'pending'},
      {name:'Kaushi',id:16,date:'2022-05-12',marks:'pending'},
      {name:'Madara',id:22,date:'2022-05-12',marks:'pending'},
      {name:'Olu',id:41,date:'2022-05-12',marks:'pending'},
  ];

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.show(AddBookComponent);
  }


  search() {
    // this.http.get(`http://localhost:3000/book/search?name=${this.searchTerm}`).subscribe((res)=>{
    //   console.log("res",res);
    //   this.books = res as any[];
    // });
  }
}
