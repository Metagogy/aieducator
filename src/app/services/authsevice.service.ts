import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthseviceService {

  constructor(private http:HttpClient,private router:Router) { }
  
  token:string="token";

  isUserLoggedIn(){
    if(localStorage.getItem(this.token)==null)
    {
      return false;
    }
    return true;
  }
  
  login(email:string,password:string){
    return this.http.post("http://192.168.1.189:8000/api-token-auth/",{username:email,password:password});
  }

  register(email:string,password:string,name:string){
    return this.http.post("http://192.168.1.189:8000/register_serializer/",{email:email,password:password,username:name});
  }

  logout()
  {
    localStorage.removeItem(this.token);
    console.log("Local storage tokens are removed");
    this.router.navigate(['home']);
  }

  getTokens(){
    return localStorage.getItem(this.token);
  }

  setTokens(Token:string){
    localStorage.setItem(this.token,Token);
  }
}
