import { Component, OnInit, HostListener } from '@angular/core';
import {CoursedetailslaptopComponent} from '../coursedetailslaptop/coursedetailslaptop.component';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})

export class CoursedetailsComponent implements OnInit {
  public innerWidth: any;
  data:any;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
  this.innerWidth = window.innerWidth;
  // alert('The innerWidth is changed:');
  // console.log(this.innerWidth);
}

  ngOnInit() {      
      this.innerWidth = window.innerWidth;
      // console.log(history.state.data);
    }

}
