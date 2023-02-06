// @ts-ignore: Object is possibly 'null'.


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClassService } from './../../services/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  constructor(private fb: FormBuilder,private classService:ClassService) { }
  angForm!: FormGroup;
  
  ngOnInit(): void {
    this.createForm();
  }
  
  async onSubmit() {
    console.log('this.angForm.valid',this.angForm.valid);
    if (this.angForm.valid) {
      console.log("Form Submitted!");
      const res = await this.classService.createClass(this.angForm.value);
      if(res.status){
        Swal.fire({
          title: 'Success!',
          text: 'Class created successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Classname already exists',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }

    }
  }
  
  showSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Classroom created sucessfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       level: [null, Validators.required ],
       subject: ['', Validators.required ],
       fee: ['', Validators.required ],
       description: ['', Validators.required ]
    });
  }

}
