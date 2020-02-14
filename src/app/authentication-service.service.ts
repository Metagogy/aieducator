import { Injectable } from '@angular/core';
import { User } from './components/user';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  url = 'http://192.168.1.189:8000/';

  constructor(private http: HttpClient) { }

  saveLoginInfo(username, password) {
    localStorage.setItem('Username', username);
    localStorage.setItem('Password', password);
    localStorage.setItem('isLogin','true');
  }

  register(userData) {

    console.log("user data",userData);
    return this.http.post('http://192.168.0.114:8000/' + 'register_serializer/', userData);
  }

}
