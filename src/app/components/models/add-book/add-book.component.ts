import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { AuthorService } from 'src/app/services/author.service';
import Swal from 'sweetalert2';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();

  isUpdate = false;
  bookForm: FormGroup;
  genres: any = [];
  authors: any = [];
  book: any;

  constructor(private fb: FormBuilder, private bookService: BookService,
    private categoryService: CategoryService,
    private autherService: AuthorService, private bsModalRef: BsModalRef) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      isbn: ['', Validators.required],
      genreId: ['', Validators.required],
      autherId: ['', Validators.required],
      amount: ['', Validators.required],
      description: [''],
    });
  }


  ngOnInit(): void {
    this.fetchCategory();
    this.fetchAuthors();

    if (this.book) {
      this.isUpdate = true;
      this.fetchFormData();
    }
  }

  fetchFormData() {
    this.bookForm.patchValue({
      name: this.book.name,
      isbn: this.book.isbn,
      genreId: this.book.genreId,
      autherId: this.book.autherId,
      amount: this.book.amount,
      description: this.book.description,
    });
  }

  fetchCategory() {
    this.categoryService.fetch().subscribe((res) => {
      this.genres = res;
    });
  }

  fetchAuthors() {
    this.autherService.fetch().subscribe((res) => {
      this.authors = res;
    });
  }



  onSubmit() {

    if (!this.bookForm.invalid) {
      console.log(this.bookForm.value);
      if (this.isUpdate) {
        this.update();
      } else {
        this.add();
      }
    }

  }

  
  add() {
    this.bookService.addBook(this.bookForm.value).subscribe((res) => {
      this.bsModalRef.hide();
      Swal.fire({
        title: 'Success!',
        text: 'The request was successful',
        icon: 'success'
      });
      this.event.emit();
    }, error => {
      Swal.fire({
        title: 'Error!',
        text: 'The request failed',
        icon: 'error'
      });
    });

  }

  update() {
    this.bookService.updateBook(this.book.id, this.bookForm.value).subscribe((res) => {
      this.bsModalRef.hide();
      Swal.fire({
        title: 'Success!',
        text: 'The request was successful',
        icon: 'success'
      });

      this.event.emit();
    }, error => {
      Swal.fire({
        title: 'Error!',
        text: 'The request failed',
        icon: 'error'
      });
    });
  }



}
