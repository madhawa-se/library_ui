import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcq-create-card',
  templateUrl: './mcq-create-card.component.html',
  styleUrls: ['./mcq-create-card.component.scss']
})
export class McqCreateCardComponent implements OnInit {

  constructor() { }
  question=false;
  c1=false;
  c2=false;
  c3=false;
  c4=false;
  c=false;

  ngOnInit(): void {
  }

}
