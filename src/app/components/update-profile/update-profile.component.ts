import { Component, OnInit } from '@angular/core';
import { AuthseviceService } from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  // fullName:any;
  address:any;
  firstName:any;
  lastName:any;
  phone_number:any;
  showE:boolean;
  errorMessage:string;

  constructor(private service:AuthseviceService,private router:Router) { }

  ngOnInit() {
  }

  updateProfile()
  {
    this.service.updateProfile(this.firstName,this.lastName,this.phone_number,this.address).subscribe(res=>{
        // console.log("The response you caught from update profile is",res);
        // if(res["status"]=="Success")
        // {
        //   this.router.navigate(['/profile']);
        // }else{
        //   alert("Your profile is not updated");
        // }  
        this.router.navigate(['/profile']);
        this.showE=false;
      },error=>{
        this.showE=true;
        this.errorMessage=error.error.msg;
        console.log(error);
    });
    // console.log("Update profile is called");
  }
}
