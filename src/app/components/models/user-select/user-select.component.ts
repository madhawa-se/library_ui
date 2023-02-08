import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {
  searchTerm: string;
  users: any[];
  public event: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  search() {
    this.http.get(`http://localhost:3000/members/search?name=${this.searchTerm}`).subscribe((res) => {
      console.log("res", res);
      this.users = res as any[];
    });
  }

  selectUser(user: any) {
    this.event.emit(user);
    this.bsModalRef.hide();
  }

}
