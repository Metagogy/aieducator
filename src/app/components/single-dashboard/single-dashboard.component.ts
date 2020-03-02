import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { GaugeChartModule } from 'angular-gauge-chart'
import { DataServiceService } from 'src/app/data-service.service';
// import { first } from 'rxjs/operators';
// import { state } from '@angular/animations';
// import { createElement, Renderable } from 'ng-vdom'
// import { Script } from 'vm';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-single-dashboard',
    templateUrl: './single-dashboard.component.html',
    styleUrls: ['./single-dashboard.component.css']
})

export class SingleDashboardComponent implements OnInit {
    finalDataList: any;
    rewards: any;
    quizes: any;
    progress: any;
    finaltestdata: any;
    finalAssignData: any;
    tests: any;
    testData: any;
    chapters: any;
    assignData: any;
    courseName: any;
    courses: any[];
    projects = 0;
    regCourses: any[];



    constructor(private service: DataServiceService, private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
        this.spinner.show();
        this.service.getDashBoardData(12, 78).subscribe(res => {
            console.log("res: ", res);
            // this.response = res['regcourses'];
            this.finalDataList = res["final_data_list"][0];
            console.log("final data list : ", this.finalDataList);
            this.regCourses = res["regcourses"];
            console.log("reg courses :", this.regCourses.length);

            this.rewards = this.finalDataList["rewards"];
            this.quizes = this.finalDataList["quizes"];
            this.progress = this.finalDataList["percent"];
            this.finaltestdata = this.finalDataList["final_test_data"];
            this.finalAssignData = this.finalDataList["final_assignment_data"]
            this.tests = this.finaltestdata["tests"];
            this.testData = this.finaltestdata["test_data"];
            this.chapters = this.finalAssignData["chapters"];
            this.assignData = this.finalAssignData["assignment_data"];
            this.courseName = this.finalDataList["course name"];


            this.service.setUserDetails(res["user_name"], res["user_id"]);

            this.spinner.hide();


            // column chart for quiz performance
            Highcharts.chart({
                chart: {
                    renderTo: "quizGraph",
                    type: 'column',
                    scrollablePlotArea: {
                        minWidth: 3700,
                        scrollPositionX: 1
                    }
                },
                title: {
                    text: 'Quiz Performance'
                },
                subtitle: {
                    text: 'Source: aieducator.com'
                },
                xAxis: {
                    categories: this.tests,
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
                series:
                    [{
                        type: 'column',
                        name: this.testData["name"],
                        data: this.testData["data"]
                    }

                    ]
            });


            // column chart for Problem solving skills vs time
            Highcharts.chart({
                chart: {
                    renderTo: "problemsGraph",
                    type: 'column',
                    scrollablePlotArea: {
                        minWidth: 3700,
                        scrollPositionX: 1
                    }
                },
                title: {
                    text: 'Problem solving skills vs time'
                },
                xAxis: {
                    categories: this.chapters
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
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        grouping: true,
                        shadow: true,
                        borderWidth: 0
                    }
                },
                series: [
                    {
                        type: 'column',
                        name: this.assignData["name"],
                        color: 'red',
                        data: this.assignData["data"],
                        pointPadding: 0.3,
                        pointPlacement: -0.2
                    },
                    {
                        type: 'column',
                        name: "timetaken by " + this.assignData["name"],
                        color: 'rgba(126,86,134,.9)',
                        data: this.assignData["time"],
                        pointPadding: 0.4,
                        pointPlacement: -0.2
                    }
                ]
            });

            // integration guage chart for profile performance

            Highcharts.chart({
                chart: {
                    type: 'solidgauge',
                    renderTo: 'performanceGauge'
                },

                title: {
                    text: 'Profile Performance'
                },

                pane: {
                    center: ['50%', '85%'],
                    size: '150%',
                    startAngle: -90,
                    endAngle: 90,
                    background: [
                        {
                            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                            innerRadius: '60%',
                            outerRadius: '100%',
                            shape: 'arc',
                        }
                    ]
                    //   background: {
                    //       backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                    //       innerRadius: '60%',
                    //       outerRadius: '100%',
                    //       shape: 'arc',
                    //   }
                },

                exporting: {
                    enabled: false
                },

                tooltip: {
                    enabled: false
                },


                // the value axis
                yAxis: {
                    min: 0,
                    max: 100,
                    title: {
                        // text: 'Profile Performance'
                    },
                    stops: [
                        [0.1, '#55BF3B'], // green
                        [0.5, '#DDDF0D'], // yellow
                        [0.9, '#DF5353'] // red
                    ],
                    lineWidth: 0,
                    tickWidth: 0,
                    minorTickInterval: null,
                    tickAmount: 2,
                    // title: {
                    //     y: -70
                    // },
                    labels: {
                        y: 16
                    }
                },

                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            useHTML: true,

                        },
                    }
                },

                credits: {
                    enabled: false
                },

                series: [{
                    type: 'gauge',
                    name: 'Profile Performance',
                    data: [10],
                    dataLabels: {
                        format:
                            '<div style="text-align:center">' +
                            '<span style="font-size:5px">{y}</span><br/>' +
                            // '<span style="font-size:12px;opacity:0.4">km/h</span>' +
                            '</div>'
                    },
                    tooltip: {
                        valueSuffix: ''
                    }
                }]

            }),
                error => {
                    this.spinner.hide();
                    alert(" error :" + error.message);
                }
        });
    }


    showGroupGraphs() {
        // column chart for quiz performance
        Highcharts.chart({
            chart: {
                renderTo: "quizGraph",
                type: 'column',
                scrollablePlotArea: {
                    minWidth: 3700,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Quiz Performance'
            },
            subtitle: {
                text: 'Source: aieducator.com'
            },
            xAxis: {
                categories: this.tests,
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
            series:
                [{
                    type: 'column',
                    name: this.testData["name"],
                    data: this.testData["data"]
                }

                ]
        });


        // column chart for Problem solving skills vs time
        Highcharts.chart({
            chart: {
                renderTo: "problemsGraph",
                type: 'column',
                scrollablePlotArea: {
                    minWidth: 3700,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Problem solving skills vs time'
            },
            xAxis: {
                categories: this.chapters
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
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                column: {
                    grouping: true,
                    shadow: true,
                    borderWidth: 0
                }
            },
            series: [
                {
                    type: 'column',
                    name: this.assignData["name"],
                    color: 'red',
                    data: this.assignData["data"],
                    pointPadding: 0.3,
                    pointPlacement: -0.2
                },
                {
                    type: 'column',
                    name: "timetaken by " + this.assignData["name"],
                    color: 'rgba(126,86,134,.9)',
                    data: this.assignData["time"],
                    pointPadding: 0.4,
                    pointPlacement: -0.2
                }
            ]
        });
    }
}
