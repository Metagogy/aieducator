import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css', '../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class HomecomponentComponent implements OnInit {
 particlesJS: any;

  constructor(private router: Router) {
    // this.loadScript();
  }

  ngOnInit() {
    AOS.init();
  }

  sendToDetails(id){
    this.router.navigate(['/coursedetails'], {state: {data: {courseId: id}}});
  }

}
