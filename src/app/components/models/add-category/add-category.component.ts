import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category:any;
  categoryForm: FormGroup;
  isUpdate=false;
  constructor(private fb: FormBuilder, private categoryService: CategoryService,private bsModalRef:BsModalRef) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.category){
      this.isUpdate=true;
      this.fetchFormData();
    }
  }

  fetchFormData() {
    this.categoryForm.patchValue({
      name: this.category.name
    });
  }

  onSubmit() {
    console.log(this.categoryForm.value);

    if (!this.categoryForm.invalid) {
      console.log(this.categoryForm.value);
     if(this.isUpdate){
       this.update();
     }else{
        this.add();
     }
    }

  }

  add(){
    this.categoryService.add(this.categoryForm.value).subscribe((res) => {
      this.bsModalRef.hide();
      Swal.fire({
        title: 'Success!',
        text: 'The request was successful',
        icon: 'success'
      });
    },error=>{
      Swal.fire({
        title: 'Error!',
        text: 'The request failed',
        icon: 'error'
      });
    });

  }

  update(){
    this.categoryService.update(this.category.genreId ,this.categoryForm.value).subscribe((res) => {
      this.bsModalRef.hide();
      Swal.fire({
        title: 'Success!',
        text: 'The request was successful',
        icon: 'success'
      });
    },error=>{
      Swal.fire({
        title: 'Error!',
        text: 'The request failed',
        icon: 'error'
      });
    });
  }

}

