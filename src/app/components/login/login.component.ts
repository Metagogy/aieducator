import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { AuthseviceService } from 'src/app/services/authsevice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthseviceService) { }

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
    this.authService.login(this.email,this.password).subscribe(
      (data)=>{console.log(data)}
    );
  }

  // login(form) {
  //   alert('Your Username :' + form.value.email + '\n Password is :' + form.value.password);
  //   console.log(form.value);  // { first: '', last: '' }
  //   console.log(form.valid);  // false
  //   // localStorage.setItem('Username' , form.value.email);
  //   // localStorage.setItem('Password' , form.value.password);
  //   this.Auth.saveLoginInfo(form.value.email, form.value.password);
  // }
}
