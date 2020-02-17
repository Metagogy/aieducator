import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { AuthseviceService } from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthseviceService,private router:Router,private spinner:NgxSpinnerService) { }

  email:string;
  password:string;

  ngOnInit() {

  }

  // login(form) {
  //   alert('Your Username :' + form.value.email + '\n Password is :' + form.value.password);
  //   console.log(form.value);  // { first: '', last: '' }
  //   console.log(form.valid);  // false
  //   // localStorage.setItem('Username' , form.value.email);
  //   // localStorage.setItem('Password' , form.value.password);
  //   this.Auth.saveLoginInfo(form.value.email, form.value.password);
  // }

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
        // console.log(data)
        this.authService.setTokens(data["token"]);
        window.location.reload();
        this.router.navigate(['dashboard']);
        this.spinner.hide();
      },error=>{
        console.log(error);
        alert("You are not logged in due to"+error.statusText);
        this.spinner.hide();
      }
    );
  }

}
