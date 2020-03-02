import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationServiceService {
 
  constructor() { }

  saveLoginInfo(username:any, password:any) {
    localStorage.setItem('Username' , username);
    localStorage.setItem('Password' , password);
  }

}
