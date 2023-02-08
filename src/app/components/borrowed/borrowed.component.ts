import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.scss']
})
export class BorrowedComponent implements OnInit {

  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  borrows: any[];
  fine=0;
  constructor(private modalService: BsModalService,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBorrowed();
    this.fetchFine();
  }

  fetchBorrowed() {
    this.http.get(`http://localhost:3000/book/borrow`).subscribe((res)=>{
      console.log("res",res);
      this.borrows = res as any[];
    });
  }

  fetchFine() {
    this.http.get(`http://localhost:3000/book/fine`).subscribe((res)=>{
      this.fine = res as number;
    });
  }


}

