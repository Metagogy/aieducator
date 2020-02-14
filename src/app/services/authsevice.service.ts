import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthseviceService {

  constructor(private http:HttpClient,private router:Router) { }
  
  token:string="TOKEN";

  isUserLoggedIn(){
    return localStorage.getItem(this.token);
  }
  login(email:string,password:string){
    
    if(email==="nagubandisai40@gmail.com" && password==="saikumar")
    {
      console.log("User is successfully logged in");
      this.setTokens("sai is authorized")
    }    
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1'); 
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
