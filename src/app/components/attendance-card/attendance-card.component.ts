import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-card',
  templateUrl: './attendance-card.component.html',
  styleUrls: ['./attendance-card.component.scss']
})
export class AttendanceCardComponent implements OnInit {
  attendance=[
    
    {name:'Akalanka',id:18,date:'2022-05-01',present:true, stream:'Java variables - live lecture'},
    {name:'Kaushi',id:16,date:'2022-05-01',present:true, stream:'Java variables - live lecture'},
    {name:'Madara',id:22,date:'2022-05-01',present:false, stream:'Java variables - live lecture'},

];
  constructor() { }

  ngOnInit(): void {
  }

}
