import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataServiceService } from 'src/app/data-service.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    finalDataList: any;
    regCourses: any;
    rewards = 0;
    quizes = 0;
    progress = 0;
    projects = 0;
    finaltestdata: any = 0;
    finalAssignData: any = 0;
    tests: any = 0;
    testData: any = 0;
    chapters: any = 0;
    assignData: any = 0;
    courseName: any;
    isData: boolean;
    // profilePerformance: any = 0;
    resumeURL: any;
    enable: boolean;
    subscribeTimer: any;
    timeLeft: number;
    interval: any;
    closeResult: string;
    modalOptions: NgbModalOptions;
    length: any = 0;
    chats:any;
    userName:string;
    userId:any;
    groupId:any;
    no_of_registered_users:any;
    total_users:any;
    userdetails:any;
    flag = 0;
    iStaff:boolean;
    knowledgeGap:any;

    // rg gauge chart values

    public canvasWidth = 300
    public needleValue = 0
    public centralLabel = 'ZPF'
    public name = 'Profile Performance'
    public bottomLabel = '0'
    public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['#3dcc5b','#ff5454'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    // arcColors: ['#ff5454', '#3dcc5b','#ff5454'],
    // arcDelimiters: [33.33,66.66,99.99],
    // rangeLabel: ['0', '100'],
    arcOverEffect: true
}

    constructor(private service: DataServiceService, inject: Injector, private router: Router, private modalService: NgbModal,private spinner:NgxSpinnerService) {
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop',
            size: 'xl'
        }
    }

    ngOnInit() {
        this.spinner.show();
        this.service.fetchRegisteredCourses().subscribe(res => {    
            console.log(res)
            this.spinner.hide();
            this.chats=res["cgd"][0];
            this.total_users=res["total_users"];
            this.no_of_registered_users=res["no_of_registered_users"];
            this.userdetails=res["registered_users"];
            this.iStaff=res["is_staff"];
            // console.log("The user is ",this.iStaff)
            // console.log("The total no of users are ",this.total_users);
            // console.log("The registered students are ",this.no_of_registered_users);
            // console.log("The course group details is",res["cgd"]);
            this.userName=this.chats.name;
            // this.groupId=this.chats.coursegroup_id;
            this.userId=this.chats.id;
            if(!this.iStaff){
                this.regCourses = res['reg_courses'];
                this.length = this.regCourses.length;
                this.spinner.hide;
                this.chats=res["cgd"][0];
                // console.log("The user is not an admin");
            // console.log("The course group details is",res["cgd"]);
                this.service.setUserDetails(this.userName,this.userId);
            }else{
                this.service.setUserDetails(this.userName,this.userId);
                // console.log("The user is admin");
            }

        },error=>{
            // console.log("You caught an error");
            this.spinner.hide();
        });
        // this.loadPerformanceGuage();
    }

    reset() {
        this.finalDataList = [];
        this.rewards = 0;
        this.quizes = 0;
        this.progress = 0;
        this.projects = 0;
        this.finaltestdata = 0;
        this.finalAssignData = 0;
        this.tests = 0;
        this.testData = 0;
        this.chapters = 0;
        this.assignData = 0;
        this.courseName = null;
        this.isData = false;
        this.needleValue = 0;
    }

    onCourseSelect(courseId: any, userId: any) {
        this.reset();
        // console.log('userId:' + userId, 'courseId:' + courseId)
        this.spinner.show();
        this.service.getDashBoardData(courseId, userId).subscribe(res => {
            console.log("res: ", res);
            this.finalDataList = res["final_data_list"][0];
            // console.log("final data list : ", this.finalDataList);
            this.needleValue = res['angle'];
            this.bottomLabel = res['angle'];
            this.spinner.hide();
            if (this.finalDataList != undefined) {
                this.knowledgeGap=res["kg"]
                console.log(this.knowledgeGap);
                this.resumeURL = this.finalDataList["last_urls"].url;
                this.rewards = this.finalDataList["rewards"];
                this.quizes = this.finalDataList["quizes"];
                this.progress = this.finalDataList["percent"];
                this.finaltestdata = this.finalDataList["final_test_data"];
                this.finalAssignData = this.finalDataList["final_assignment_data"]
                this.tests = this.finaltestdata["tests"];
                this.testData = this.finaltestdata["test_data"];
                this.chapters = this.finalAssignData["chapters"];
                this.assignData = this.finalAssignData["assignment_data"];
                this.courseName = this.finalDataList["course__name"];
                // console.log('resume url:', this.resumeURL)
                this.isData = true;
                
                // this.loadPerformanceGuage();
                Highcharts.chart({
                    chart: {
                        renderTo: "quizGraph",
                        type: 'column',
                        scrollablePlotArea: {
                            minWidth: 3700,
                            scrollPositionX: 1
                        }
                    },
                    exporting: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
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
                            // name: 'Navin',
                            // data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
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
                    exporting: {
                        enabled: false
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
                            // name: 'user 2',
                            //     color: 'green',
                            //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
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
            else {
                this.isData = false;
            }
       
        }, error => {
            alert(" error :" + error.message);
            this.spinner.hide();
        });
    }

    loadPerformanceGuage() {
        // integration guage chart for profile performance

        // Highcharts.chart({
        //     chart: {
        //         type: 'solidgauge',
        //         renderTo: 'performanceGauge'
        //     },

        //     title: {
        //         text: 'Profile Performance'
        //     },

        //     pane: {
        //         center: ['50%', '85%'],
        //         size: '150%',
        //         startAngle: -90,
        //         endAngle: 90,
        //         background: [{
        //             backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        //             innerRadius: '60%',
        //             outerRadius: '100%',
        //             shape: 'arc',
        //         }]
        //     },

        //     exporting: {
        //         enabled: false
        //     },

        //     tooltip: {
        //         enabled: false
        //     },
        //     // the value axis
        //     yAxis: {
        //         min: -90,
        //         max: 90,
        //         title: {
        //             // text: 'Profile Performance'
        //         },
        //         stops: [
        //             [10, '#55BF3B'], // green
        //             [25, '#DDDF0D'], // yellow
        //             [50, '#DF5353'] // red
        //         ],
        //         lineWidth: 0,
        //         tickWidth: 0,
        //         minorTickInterval: null,
        //         tickAmount: 2,
        //         // title: {
        //         //     y: -70
        //         // },
        //         labels: {
        //             y: 16
        //         }
        //     },

        //     plotOptions: {
        //         solidgauge: {
        //             dataLabels: {
        //                 y: 5,
        //                 borderWidth: 0,
        //                 useHTML: true,

        //             },
        //         }
        //     },

        //     credits: {
        //         enabled: false
        //     },

        //     series: [{
        //         type: 'gauge',
        //         name: 'Profile Performance',
        //         data: [this.profilePerformance],
        //         allowPointSelect: false,
        //         dataLabels: {
        //             format:
        //                 '<div style="text-align:center">' +
        //                 '<span style="font-size:10px">{y}</span><br/>' +
        //                 // '<span style="font-size:12px;opacity:0.4">km/h</span>' +
        //                 '</div>'
        //         },
        //         tooltip: {
        //             valueSuffix: ''
        //         }
        //     }]

        // })

        Highcharts.chart({

            chart: {
                renderTo: 'performanceGauge',
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

        },                // Add some life
        );
    }

    open(content:any) {
        this.modalService.open(content, this.modalOptions)
        // loading graphs for group performance
        this.spinner.show();
        // load group graphs here
        this.service.getDashBoardData(13, 1).subscribe(res => {
            this.spinner.hide();
            this.flag = 1;
            // console.log("res: ", res);
            this.finalDataList = res["final_data_list"][0];
            // console.log("final data list : ", this.finalDataList);
              // show graph for 1 min.
            this.timeLeft = 60;
            // console.log("time left before timmer :", this.timeLeft);
            this.interval = setInterval(() => {
                if (this.timeLeft > 1) {
                    this.timeLeft--;
                    // console.log("time left after timmer:", this.timeLeft);
                } else {
                    clearInterval(this.interval);
                    this.flag = 0;
                    // console.log("time expired :", this.timeLeft);
                    this.closeResult = `Closed with: ${this.getDismissReason("time expired")}`;
                    this.modalService.dismissAll();
                }
            }, 1000)
            Highcharts.chart({
                chart: {
                    renderTo: "quizGroupGraph",
                    type: 'column',
                    scrollablePlotArea: {
                        minWidth: 3700,
                        scrollPositionX: 1
                    }
                },
                exporting: {
                    enabled: false
                },
                credits: {
                    enabled: false
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
                    }, {
                        type: 'column',
                        name: this.testData["name"],
                        data: this.testData["data"]
                    }, {
                        type: 'column',
                        name: this.testData["name"],
                        data: this.testData["data"]
                    }, {
                        type: 'column',
                        name: this.testData["name"],
                        data: this.testData["data"]
                    }, {
                        type: 'column',
                        name: this.testData["name"],
                        data: this.testData["data"]
                    }]
            });
            // column chart for Problem solving skills vs time
            Highcharts.chart({
                chart: {
                    renderTo: "problemsGroupGraph",
                    type: 'column',
                    scrollablePlotArea: {
                        minWidth: 3700,
                        scrollPositionX: 1
                    }
                },
                exporting: {
                    enabled: false
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
                    },
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
                    },
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
                    , {
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
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }



    courseResume() {
        // console.log("The last activity url is"+this.resumeURL);
        this.router.navigate([this.resumeURL]);
    }

    navigateKg(link:any){
        this.router.navigate(['testandtopic/'+link]);
    }
  

}
