import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {AuthseviceService} from 'src/app/services/authsevice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './static/assets/css/theme.css', './static/assets/css/style1.css', './static/assets/fonts/Inter-UI.var.woff2', './static/assets/fonts/Inter-UI-upright.var.woff2']
})

export class AppComponent implements OnInit{
  title = 'metagogyai';
  loginStatus:boolean;
  
  constructor(private service:AuthseviceService,private router:Router){}
  logout1(){
    this.service.logout();
    window.location.reload();
  }
  
  ngOnInit(){
    if(this.service.isUserLoggedIn())
    {
      this.loginStatus=true;
    }
    else{
      this.loginStatus=false;
    }
    AOS.init();
  }
}
