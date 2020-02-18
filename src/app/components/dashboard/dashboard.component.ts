import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartModule } from 'angular-highcharts';
import { GaugeChartModule } from 'angular-gauge-chart'
import { DataServiceService } from 'src/app/data-service.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    arrayItem: any;
    
    constructor(private service: DataServiceService) { }

    ngOnInit() {
        this.service.getDashBoardData().subscribe(res=>{
            console.log(res);
        },error=>{
            console.log("Caught an error");
        })
    }
}
