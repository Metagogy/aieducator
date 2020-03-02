import { Component, OnInit } from '@angular/core';
import { AuthseviceService } from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  eMail:any;
  eMailVerified:boolean;
  showError:boolean;
  secreteCode:any;
  newPassword:any;
  reTypeNewPassword:any;
  showE:boolean;
  errorMessage:string;

  constructor(private service:AuthseviceService,private router:Router) { }

  ngOnInit() {
  }

  resetPassword(){
    this.service.resetPassword(this.eMail).subscribe(res=>{
      // console.log("The response you caught from resetPassword is ",res);
      this.eMailVerified=true;
      this.showError=false;
      this.eMail="";
      // if(res["context"]=="success")
      // {
      //   this.eMailVerified=true;
      //   this.showError=false;
      //   this.eMail="";
      // }
      // else{
      // }
    },error=>{
      this.eMailVerified=false;
      this.showError=true;
      console.log(error);
    });
  }

  submitPasscode(){
    // console.log("Submit password button is clicked");
    if(this.newPassword!=this.reTypeNewPassword)
    {
      alert("Password doesn't match");
      return;
    }
      this.service.submitPasscode(this.secreteCode,this.newPassword).subscribe(res=>{
      // console.log("The response you got from forget password is",res);
      this.showE=false;
      this.router.navigate(['/']);
    },error=>{
      this.showE=true;
      this.errorMessage=error.error.status; 
      console.log(error);
    });
  }

}
