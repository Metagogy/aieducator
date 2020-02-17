import { Component, OnInit } from '@angular/core';
import {TestandtopicService} from 'src/app/services/testandtopic.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})

export class McqComponent implements OnInit {

  constructor(private service:TestandtopicService) { }

  ngOnInit() {
    console.log("Hello");
  }

}
