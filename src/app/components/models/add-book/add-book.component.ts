import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  ngOnInit(): void {
  }

  bookForm: FormGroup;
  genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance'];

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      ISBN: ['', Validators.required],
      genre: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.bookForm.value);

    if (!this.bookForm.invalid) {
      console.log(this.bookForm.value);
      this.bookService.addBook(this.bookForm.value).subscribe((res) => {
        console.log(res);
        // Swal.fire({
        //   title: 'Success!',
        //   text: 'The request was successful',
        //   icon: 'success'
        // });
      });
    }

  }

}
