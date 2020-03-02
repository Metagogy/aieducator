import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataServiceService} from 'src/app/data-service.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-registered-courses',
  templateUrl: './registered-courses.component.html',
  styleUrls: ['./registered-courses.component.css']
})
export class RegisteredCoursesComponent implements OnInit {

  response:any;
  isAvailable:boolean;

  constructor(private router:Router,private service:DataServiceService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.getRegisteredCourses().subscribe(res=>{
      // console.log("Registered courses responses");  
      // console.log(res);
      this.response=res["courses"];
      if(this.response.length==0)
      {
        this.isAvailable=false;
      }else{
        this.isAvailable=true;
      }
      this.spinner.hide();
    },error=>{
      this.spinner.hide();
        console.log("You caught an error while fetching registered courses");
    });

  }

}
