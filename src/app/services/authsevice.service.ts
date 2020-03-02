import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthseviceService {

  // url="http://192.168.0.123:9000/";
  url=environment.url;


  constructor(private http:HttpClient,private router:Router) { }
  
  token:string="token";
  // loginStatus="login_status";

  updateProfile(firstName:any,lastName:any,phoneNum:any,address:any){
      return this.http.post(this.url+'update_profile',{'firstName':firstName,'lastName':lastName,'phoneNum':phoneNum,'address':address});
  }

  isUserLoggedIn(){
    if(localStorage.getItem(this.token)==null)
    {
      return false;
    }
    return true;
  }
  
  login(email:string,password:string){
    return this.http.post(this.url+"api-token-auth/",{username:email,password:password});
  }

  register(email:string,password:string,name:string){
    return this.http.post(this.url+"register_serializer/",{email:email,password:password,username:name});
  }

  logout()
  {
    // localStorage.removeItem(this.token);
    localStorage.clear();
    // localStorage.removeItem(this.loginStatus);
    // console.log("Local storage tokens are removed");
    this.router.navigate(['']);
  }

  getTokens(){
    return localStorage.getItem(this.token);
  }

  setTokens(Token:string){
    localStorage.setItem(this.token,Token);
  }

  changePassword(currentPassword:any,newPassword:any,reNewPassword:any)
  {
    // console.log("change password method from a auth service is called");
    return this.http.post(this.url+"changePassword/",{'oldPassword':currentPassword,'newPassword':newPassword,'newPassword1':reNewPassword});
  }

  resetPassword(email:any)
  {
    // console.log("Reset password is called");
    return this.http.post(this.url+'forget_password',{'email':email})
  }

  submitPasscode(passcode:any,password:any){
    // console.log("Submit password method in forgot password is called");
    return this.http.post(this.url+"passcode_validation",{'passcode':passcode,'password':password});
  }

}
