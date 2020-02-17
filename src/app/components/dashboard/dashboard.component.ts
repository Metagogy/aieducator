import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartModule } from 'angular-highcharts';
import { GaugeChartModule } from 'angular-gauge-chart';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    data: any;
    dataList:any;
    constructor(private service: DataServiceService) { }

    ngOnInit() {
        this.service.getDashBoardData().subscribe(res=>{
            this.data=res;
            this.dataList = this.data["final_data_list"]
            this.dataList.forEach((obj, index) => {
                console.log(obj, index)
           

        Highcharts.chart({
            chart: {
                renderTo: 'Qcontainer'+index,
                type: 'column'
            },
            title: {
                text: 'Quiz Performance'
            },
            subtitle: {
                text: 'Source: aieducator.com'
            },
            xAxis: {
                categories: [
                    'topic1',
                    'topic2',
                    'topic3',
                    'topic4',
                    'topic5',
                    'topic6',
                    'topic7',
                    'topic8',
                    'topic9',
                    'topic10',
                    'topic11',
                    'topic12'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'performance graph'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [
                {
                    type: 'column',
                    name: 'Navin',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }, {
                    type: 'column',
                    name: 'Ram',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                }, {
                    type: 'column',
                    name: 'kartik',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                }, {
                    type: 'column',
                    name: 'mina',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                }]
        });

        // column chart 
        Highcharts.chart({
            chart: {
                renderTo: 'Acontainer'+index,
                type: 'column',
            },
            title: {
                text: 'Problem solving skills vs time'
            },
            xAxis: {
                categories: [
                    'topic1',
                    'topic2',
                    'topic3',
                    'topic4',
                    'topic5',
                    'topic6',
                    'topic7',
                    'topic8',
                    'topic9',
                    'topic10',
                    'topic11',
                    'topic12'
                ],
            },
            yAxis: [{
                min: 0,
                title: {
                    text: 'Problems Solved'
                }
            }, {
                title: {
                    text: 'Time -> no of units * 15mins'
                },
                opposite: true
            }],
            legend: {
                shadow: false
            },
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: {
                    grouping: true,
                    shadow: true,
                    borderWidth: 0
                }
            },
            series: [{
                type: 'column',
                name: 'user 1',
                color: 'red',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                pointPadding: 0.3,
                pointPlacement: -0.2
            }, {
                type: 'column',
                name: 'user 2',
                color: 'green',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
                pointPadding: 0.3,
                pointPlacement: -0.2
            }, {
                type: 'column',
                name: 'user 3',
                color: 'yellow',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
                pointPadding: 0.3,
                pointPlacement: -0.2
            }, {
                type: 'column',
                name: 'user 4',
                color: 'black',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
                pointPadding: 0.3,
                pointPlacement: -0.2
            }, {
                type: 'column',
                name: 'user 5',
                color: 'blue',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
                pointPadding: 0.3,
                pointPlacement: -0.2
            }]



        });



        // integration guage chart

        Highcharts.chart({

            chart: {
                renderTo: 'angleGauge'+index,
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
                    }, {
                        from: 30,
                        to: 90,
                        color: '#DF5353' // green
                    }, {
                        from: -30,
                        to: 30,
                        color: 'green' // green
                    }, {
                        from: -90,
                        to: -30,
                        color: '#DF5353' // red
                    }]
            },

            series: [{
                type: 'gauge',
                name: 'Speed',
                data: [0],
                tooltip: {
                    valueSuffix: ' o degrees'
                }
            }]

        },
          // Add some life
        );
    });

},error=>{
    console.log("Error caught")}
    );
    }
}
