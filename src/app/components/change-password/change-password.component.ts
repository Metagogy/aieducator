import { Component, OnInit } from '@angular/core';
import { AuthseviceService } from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currentPassword:any;
  newPassword:any;
  reNewPassword:any;
  response:any;
  showE:boolean;
  errorMessage:string;
  constructor(private authService:AuthseviceService,private router:Router) { }

  ngOnInit() {


  }

  changePassword(){
    // console.log("The password is",this.currentPassword);
    // console.log("The password is",this.newPassword);
    // console.log("The password is",this.reNewPassword);
    
    if(this.currentPassword==""||this.newPassword==""||this.reNewPassword=="")
    {
      alert("Please Enter all the required fields");
      return;
    }
    this.authService.changePassword(this.currentPassword,this.newPassword,this.reNewPassword).subscribe(res=>{
      // console.log("The response from change password component result is",res)
      this.response=res;
      this.showE=false;
      this.errorMessage="";
      // if(this.response["status"]=="fail")
      // {
      //   alert("Your password change failed "+this.response.msg.error);
      //   return;
      // }
      this.router.navigate(['/dashboard']);
    },error=>{
      this.showE=true;
      console.log(error);
      // console.log(error.error.msg.error)
      this.errorMessage=error.error.msg.error;
    });
    this.currentPassword="";
    this.newPassword="";
    this.reNewPassword="";
  }

}
