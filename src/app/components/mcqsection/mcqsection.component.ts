import { Component, OnInit } from '@angular/core';

declare function w3_open():any;

@Component({
  selector: 'app-mcqsection',
  templateUrl: './mcqsection.component.html',
  styleUrls: ['./mcqsection.component.css']
})

export class McqsectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        w3_open();
  }
  
}
