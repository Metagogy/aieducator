import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  response:any;
  userMail:any;
  userName:any;
  courses:any;

  constructor(private service:DataServiceService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(res=>{
      // console.log("The response you caught from profile is",res)
      this.response=res;
      this.userMail=res["user-mail"];
      this.userName=res["user_name"];
      this.courses=res["regCourses"];
    },error=>{
        console.log(error);
    });
  }

}
