import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { AuthseviceService } from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthseviceService,private router:Router,private spinner:NgxSpinnerService) { }
  username:string;
  email:string;
  password:string;
  rpassword:string;
  showE:boolean;

  
  ngOnInit() {
  }


  onUpdateName(event:any){
    this.username=event.target.value;
  }

  onUpdatePassword(event:any){
    this.password=event.target.value;
  }

  onUpdateEmail(event:any){
    this.email=event.target.value;
  }

  onUpdateRPassword(event:any){
    this.rpassword=event.target.value;
  }



  register(){
    this.spinner.show();
    // console.log(this.email+" "+this.password+" "+this.username);
    this.authService.register(this.email,this.password, this.username).subscribe(
      (data)=>{
        this.showE=false;
        console.log(data)
        this.router.navigate(['login']);
        this.spinner.hide();
      },error=>{
        this.showE=true;
        console.log(error);
        // alert("Registration failed "+error.statusText);
        this.spinner.hide();
      }
    );
  }
}