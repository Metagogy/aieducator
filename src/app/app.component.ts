import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './static/assets/css/theme.css', './static/assets/css/style1.css', './static/assets/fonts/Inter-UI.var.woff2', './static/assets/fonts/Inter-UI-upright.var.woff2']
})

export class AppComponent implements OnInit{
  title = 'metagogyai';
  ngOnInit(){
    AOS.init();
  }
}
