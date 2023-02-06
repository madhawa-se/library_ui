import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mcq-create',
  templateUrl: './mcq-create.component.html',
  styleUrls: ['./mcq-create.component.scss']
})
export class McqCreateComponent implements OnInit {
  qnum='02';

  constructor() { }
  
  
  ngOnInit(): void {
    // this.showSuccess();
  }
  
  
  showSuccess(){
    Swal.fire({
      title: 'Error!',
      text: 'Question already exist in the memory',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

}
