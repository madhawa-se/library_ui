import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Book } from 'src/models/book-interface';
import Swal from 'sweetalert2';
import { UserSelectComponent } from '../models/user-select/user-select.component';

@Component({
  selector: 'app-book-lend',
  templateUrl: './book-lend.component.html',
  styleUrls: ['./book-lend.component.scss']
})
export class BookLendComponent implements OnInit {

  searchTerm: string;
  books: any[] = [];
  selectedBooks: any[] = [];
  borrowed: any[] = [];
  modalRef?: BsModalRef | null;
  user: any;
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.search();
  }

  selectUser() {
    this.modalRef = this.modalService.show(UserSelectComponent);
    this.modalRef.content.event.subscribe((res: any) => {
      this.user = res;
      this.getBorrowedBooks();
    });
  }

  selectBook(book: any) {
    if (this.borrowed.length + this.selectedBooks.length >= 3) {
      Swal.fire({
        title: 'Error!',
        text: 'You can borrow only 3 books',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    let bookExists = this.selectedBooks.some(selectedBook => {
      return selectedBook.id === book.id
    });
    let alreadyBorrowed = this.borrowed.some(borrrow=>{
      console.log(borrrow,book);
      return  borrrow.bookId === book.id
    });

    if (!bookExists && !alreadyBorrowed) {
      this.selectedBooks.push(book);
    }
    if(alreadyBorrowed){
      Swal.fire({
        title: 'Error!',
        text: 'You have already borrowed this book',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

  }

  removeBook(book: any) {
    // remove book from selected books
    this.selectedBooks = this.selectedBooks.filter(selectedBook => {
      return selectedBook.id !== book.id
    });
  }

  borrow() {
    validate();
    this.http.post(`http://localhost:3000/book/borrow?userId=${this.user.userId}`, this.selectedBooks).subscribe((res) => {
      console.log("res", res);
      Swal.fire('Successfully Borrowed...', '', 'success') ;
      this.getBorrowedBooks();
      this.clearSelectedBooks();
    }, error => {
      Swal.fire({
        title: 'Error!',
        text: error?.message,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    });
  }

  clearSelectedBooks() {
    this.selectedBooks = [];
  }

  getBorrowedBooks() {
    this.http.get(`http://localhost:3000/book/user-borrow?userId=${this.user.userId}`).subscribe((res) => {
      console.log("res", res);
      this.borrowed = res as any[];
    });
  }

  search() {
    this.http.get(`http://localhost:3000/book/search?name=${this.searchTerm}`).subscribe((res) => {
      console.log("res", res);
      this.books = res as any[];
    });
  }

  returnBook(borrow: any) {
    const borrowId = borrow.borrowId;
    this.http.post(`http://localhost:3000/book/return?userId=${this.user.userId}&borrowId=${borrowId}`, this.selectedBooks).subscribe((res) => {
      console.log("res", res);
      this.getBorrowedBooks();
    }, error => {
      Swal.fire({
        title: 'Error!',
        text: error?.message,
        icon: 'error',
        confirmButtonText: 'OK'
      })
    });
  }

}
function validate() {

}

