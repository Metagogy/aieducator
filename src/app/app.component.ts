import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './static/assets/css/theme.css', './static/assets/css/style1.css', './static/assets/fonts/Inter-UI.var.woff2', './static/assets/fonts/Inter-UI-upright.var.woff2']
})

export class AppComponent implements OnInit{
  title = 'metagogyai';
  isLogin = false;

  constructor(private router: Router){
    if(localStorage.getItem('isLogin') == 'true'){
      this.isLogin = true;
      this.router.navigateByUrl('/login_home');
    }else{
      this.isLogin = false;
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit(){
    AOS.init();
  }
}
