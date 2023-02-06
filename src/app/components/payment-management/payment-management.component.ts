import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.scss']
})
export class PaymentManagementComponent implements OnInit {

  payments = [

    { name: 'Akalanka', id: 18, date: '2022-05-01', present: true, amount: 5000},
    { name: 'Kaushi', id: 16, date: '2022-05-01', present: true, amount: 5000 },
    { name: 'Olu', id: 22, date: '2022-05-02', present: false, amount: 5000 },
    { name: 'Saduni', id: 22, date: '2022-05-03', present: false, amount: 5000 },

  ];
  
  class='Introduction to programing';
  constructor() { }

  ngOnInit(): void {
  }

}
