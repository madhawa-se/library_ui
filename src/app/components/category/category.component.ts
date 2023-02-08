import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
import { AddCategoryComponent } from '../models/add-category/add-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  categories: any[];

  
  constructor(private modalService: BsModalService,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  

  fetchCategories() {
    this.http.get(`http://localhost:3000/category`).subscribe((res)=>{
      console.log("res",res);
      this.categories = res as any[];
      // Swal.fire('Successful...', '', 'success') ;
    });
  }

  openModal() {
    this.modalRef = this.modalService.show(AddCategoryComponent);
    this.modalRef.content.event.subscribe((res: any) => {
      this.fetchCategories();
    });
  }

  openEditModal(category:any){
    this.modalRef = this.modalService.show(AddCategoryComponent, {
      initialState: {
        category:category
      }
    });
    this.modalRef.content.event.subscribe((res: any) => {
      this.fetchCategories();
    });
  }

  deleteCategory(id:any){

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
        this.http.delete(`http://localhost:3000/category/${id}`).subscribe((res)=>{
          Swal.fire('Successful...', '', 'success') ;
          this.fetchCategories();
        });
      }
    })
  }

}
