import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();


  author: any;
  authorForm: FormGroup;
  isUpdate = false;
  constructor(private fb: FormBuilder, private authorService: AuthorService, private bsModalRef: BsModalRef) {
    this.authorForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.author) {
      this.isUpdate = true;
      this.fetchFormData();
    }
  }

  fetchFormData() {
    this.authorForm.patchValue({
      name: this.author.name
    });
  }

  onSubmit() {
    console.log(this.authorForm.value);

    if (!this.authorForm.invalid) {
      console.log(this.authorForm.value);
      if (this.isUpdate) {
        this.update();
      } else {
        this.add();
      }
    }

  }

  add() {
    this.authorService.addAuthor(this.authorForm.value).subscribe((res) => {
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
    this.authorService.updateAuthor(this.author.autherId, this.authorForm.value).subscribe((res) => {
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
