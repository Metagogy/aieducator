import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { HttpClient} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-coursecomponent',
  templateUrl: './coursecomponent.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./coursecomponent.component.css', '../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class CoursecomponentComponent implements OnInit {

  courses: any;
  isActive: boolean;
  errorStatus:boolean;
  errorMessage:any;

  constructor(private router: Router, private service: DataServiceService, private http: HttpClient,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.fetchCourses().subscribe(res=>{
      this.courses=res["courses"];
      this.errorStatus=false;
      console.log(this.courses)
      this.spinner.hide();
    },error=>{
      this.errorStatus=true;
      this.errorMessage=error.message;
        this.spinner.hide();
        console.log(error)
    });
  }

  onSelect(course: any) {
    this.router.navigate(['coursedetails', course.id])
    // console.log("The button id that is selected is "+course.id)
  }


}
