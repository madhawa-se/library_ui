import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
import { AddAuthorComponent } from '../models/add-author/add-author.component';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.scss']
})
export class AutherComponent implements OnInit {
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  authers: any[];
  constructor(private modalService: BsModalService,private http: HttpClient, public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.fetchAuthers();
  }

  fetchAuthers() {
    this.http.get(`http://localhost:3000/auther`).subscribe((res)=>{
      console.log("res",res);
      this.authers = res as any[];
      // Swal.fire('Successful...', '', 'success') ;
    });
  }

  openModal() {
    this.modalRef = this.modalService.show(AddAuthorComponent);
    this.modalRef.content.event.subscribe((res: any) => {
      this.fetchAuthers();
    });
  }

  openEditModal(author:any){
    this.modalRef = this.modalService.show(AddAuthorComponent, {
      initialState: {
        author:author
      }
    });

    this.modalRef.content.event.subscribe((res: any) => {
      this.fetchAuthers();
    });
  }

  deleteAuthor(id:any){

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
        this.http.delete(`http://localhost:3000/auther/${id}`).subscribe((res)=>{
          Swal.fire('Successful...', '', 'success') ;
          this.fetchAuthers();
        });
      }
    })
  }

}
