import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  submissions=[
    
    {name:'Akalanka',id:18,date:'2022-05-01',present:true , stream:'Java variables - live lecture'},
    {name:'Kaushi',id:16,date:'2022-05-01',present:true ,stream:'Java variables - live lecture'},
    {name:'Madara',id:22,date:'2022-05-01',present:false,stream:'Java variables - live lecture'},

];
  constructor() { }

  ngOnInit(): void {
  }

}
