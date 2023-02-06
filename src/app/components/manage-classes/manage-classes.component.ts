import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.scss']
})
export class ManageClassesComponent implements OnInit {

  constructor() { }
  
  classes=[
    'Introduction to programing',
    'Java beginner guide',
    'Typescript for developers'
  ];

  ngOnInit(): void {
  }

}
