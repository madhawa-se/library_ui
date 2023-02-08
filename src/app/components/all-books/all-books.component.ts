import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { AddBookComponent } from '../models/add-book/add-book.component';
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  books: any[];

  constructor(private modalService: BsModalService, private http: HttpClient) { }

  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;

  ngOnInit(): void {
    this.fetchBooks();
  }

  openModal() {
    this.modalRef = this.modalService.show(AddBookComponent);
    this.modalRef.content.event.subscribe((res: any) => {
      this.fetchBooks();
    });
  }

  openEditModal(book: any) {
    this.modalRef = this.modalService.show(AddBookComponent, {
      initialState: {
        book: book
      }
    });

    this.modalRef.content.event.subscribe((res: any) => {
      this.fetchBooks();
    });
  }

  fetchBooks() {
    this.http.get(`http://localhost:3000/book`).subscribe((res) => {
      console.log("res", res);
      this.books = res as any[];
    });
  }

  deleteBook(id:any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:3000/book/${id}`).subscribe((res)=>{
          Swal.fire('Successful...', '', 'success') ;
          this.fetchBooks();
        });
      }
    })
  }


}

