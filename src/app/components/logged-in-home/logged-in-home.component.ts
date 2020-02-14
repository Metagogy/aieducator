import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-logged-in-home',
  templateUrl: './logged-in-home.component.html',
  styleUrls: ['./logged-in-home.component.css','../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class LoggedInHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Highcharts.chart({

      chart: {
          renderTo: 'angleGauge', 
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
      },
  
      title: {
          text: 'Angle'
      },
  
      pane: {
          startAngle: -150,
          endAngle: 150,
          background: [{
              backgroundColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                      [0, '#FFF'],
                      [1, '#333']
                  ]
              },
              borderWidth: 0,
              outerRadius: '109%'
          }, {
              backgroundColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                      [0, '#333'],
                      [1, '#FFF']
                  ]
              },
              borderWidth: 2,
              outerRadius: '107%'
          }, {
              // default background
          }, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
          }]
      },
  
      // the value axis
      yAxis: {
          min: -90,
          max: 90,
  
          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',
  
          tickPixelInterval: 10,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
              step: 2,
              rotation: 1
          },
          title: {
              text: 'degrees'
          },
          plotBands:
          [{
            innerRadius: '50%',
            outerRadius: '100%'
            },{
              from: 30,
              to: 90,
              color: '#DF5353' // green
          },{
              from: -30,
              to: 30,
              color: 'green' // green
          },  {
              from: -90,
              to: -30,
              color: '#DF5353' // red
          }]
      },
  
      series: [{
          type:'gauge',
          name: 'Speed',
          data: [0],
          tooltip: {
              valueSuffix: ' o degrees'
          }
      }]
  
  },
  // Add some life
  );
  }

  sendToDetails(id){
    this.router.navigate(['/coursedetails'], {state: {data: {courseId: id}}});
  }

}
