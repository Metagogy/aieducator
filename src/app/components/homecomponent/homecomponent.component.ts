import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import {AuthseviceService} from 'src/app/services/authsevice.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css', '../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})

export class HomecomponentComponent implements OnInit {
 particlesJS: any;

  constructor(private router: Router,private service:AuthseviceService) {
    // this.loadScript();
  }

  ngOnInit() {
    if(this.service.isUserLoggedIn())
    {
      this.router.navigate(['dashboard']);
    }
    AOS.init();
  }

  sendToDetails(id:any){
    this.router.navigate(['/coursedetails'], {state: {data: {courseId: id}}});
  }

}
