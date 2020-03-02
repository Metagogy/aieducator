import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { AuthseviceService } from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { InteractionserviceService } from 'src/app/services/interactionservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthseviceService,private router:Router,private spinner:NgxSpinnerService,private interactionService:InteractionserviceService) { }

  email:string;
  password:string;
  errorStatus:boolean;
  loginStatus:boolean;
  showE:boolean;
  errorMessage:string;
 
  
  ngOnInit() {

  }


  onUpdatePassword(event:any){
    this.password=event.target.value;
  }


  onUpdateEmail(event:any){
    this.email=event.target.value;
  }


  login(){
    this.spinner.show();
    this.authService.login(this.email,this.password).subscribe(
      (data)=>{
        this.authService.setTokens(data["token"]);
        this.loginStatus=true;
        this.interactionService.sendToParent(this.loginStatus);
        this.router.navigate(['dashboard']);
        this.spinner.hide();
        this.showE=false;
      },error=>{
        this.errorMessage=error.error.non_field_errors[0];
        console.log(error);
        this.showE=true;
        this.interactionService.sendToParent(this.loginStatus);
        // alert("Invalid Credintials");
        this.spinner.hide();
      }
    );
  }

}
