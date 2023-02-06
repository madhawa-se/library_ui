import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tute',
  templateUrl: './tute.component.html',
  styleUrls: ['./tute.component.scss']
})
export class TuteComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  constructor() { }

  ngOnInit(): void {
  }


}
