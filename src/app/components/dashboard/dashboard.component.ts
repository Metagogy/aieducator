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
    progress;
    quizes;
    rewards;

    constructor(private service: DataServiceService) { }

    ngOnInit() {

        this.service.fetchDashboardData().pipe(first())
            .subscribe(
                res => {
                    this.arrayItem = console.log(JSON.stringify(res));
                    this.rewards = this.arrayItem.final_test_data.rewards;
                    this.quizes = this.arrayItem.final_test_data.quizes;
                    this.progress = this.arrayItem.final_test_data.percent;

                    // column chart 
                    Highcharts.chart({
                        chart: {
                            renderTo: 'container',
                            type: 'column'
                        },
                        title: {
                            text: 'Quiz Performance'
                        },
                        subtitle: {
                            text: 'Source: aieducator.com'
                        },
                        xAxis: {
                            categories: this.arrayItem.final_test_data.tests,
                            //  [
                            //     'topic1',
                            //     'topic2',
                            //     'topic3',
                            //     'topic4',
                            //     'topic5',
                            //     'topic6',
                            //     'topic7',
                            //     'topic8',
                            //     'topic9',
                            //     'topic10',
                            //     'topic11',
                            //     'topic12'
                            // ],
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
                                name: this.arrayItem.final_test_data.user5.name,
                                data: this.arrayItem.final_test_data.user5.data
                            }, {
                                type: 'column',
                                name: this.arrayItem.final_test_data.user4.name,
                                data: this.arrayItem.final_test_data.user4.data
                            }, {
                                type: 'column',
                                name: this.arrayItem.final_test_data.user3.name,
                                data: this.arrayItem.final_test_data.user3.data
                            }, {
                                type: 'column',
                                name: this.arrayItem.final_test_data.user2.name,
                                data: this.arrayItem.final_test_data.user2.data
                            }, {
                                type: 'column',
                                name: this.arrayItem.final_test_data.user1.name,
                                data: this.arrayItem.final_test_data.user1.data
                            }]
                        // [
                        // {
                        //     type: 'column',
                        //     name: 'Navin',
                        //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                        // }, {
                        //     type: 'column',
                        //     name: 'Ram',
                        //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                        // }, {
                        //     type: 'column',
                        //     name: 'satya',
                        //     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                        // }, {
                        //     type: 'column',
                        //     name: 'mina',
                        //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                        // }]
                    });


                    // column chart 
                    Highcharts.chart({
                        chart: {
                            renderTo: 'container1',
                            type: 'column',
                            // scrollablePlotArea: {
                            //     minWidth: 3700,
                            //     scrollPositionX: 1
                            // }
                        },
                        title: {
                            text: 'Problem solving skills vs time'
                        },
                        xAxis: {
                            categories: this.arrayItem.final_assignment_data.chapters
                            // [
                            //     'topic1',
                            //     'topic2',
                            //     'topic3',
                            //     'topic4',
                            //     'topic5',
                            //     'topic6',
                            //     'topic7',
                            //     'topic8',
                            //     'topic9',
                            //     'topic10',
                            //     'topic11',
                            //     'topic12'
                            // ],
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
                            name: this.arrayItem.final_assignment_data.user1.name,
                            color: 'red',
                            data: this.arrayItem.final_assignment_data.user1.data,
                            pointPadding: 0.3,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: "timetaken by " + this.arrayItem.final_assignment_data.user1.name,
                            color: 'rgba(126,86,134,.9)',
                            data: this.arrayItem.final_assignment_data.user1.time,
                            pointPadding: 0.4,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: this.arrayItem.final_assignment_data.user2.name,
                            color: 'blue',
                            data: this.arrayItem.final_assignment_data.user2.data,
                            pointPadding: 0.3,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: "timetaken by " + this.arrayItem.final_assignment_data.user2.name,
                            color: 'rgba(126,86,134,.9)',
                            data: this.arrayItem.final_assignment_data.user2.time,
                            pointPadding: 0.4,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: this.arrayItem.final_assignment_data.user3.name,
                            color: 'green',
                            data: this.arrayItem.final_assignment_data.user3.name,
                            pointPadding: 0.3,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: "timetaken by " + this.arrayItem.final_assignment_data.user3.name,
                            color: 'rgba(126,86,134,.9)',
                            data: this.arrayItem.final_assignment_data.user3.time,
                            pointPadding: 0.4,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: this.arrayItem.final_assignment_data.user4.name,
                            color: 'black',
                            data: this.arrayItem.final_assignment_data.user4.data,
                            pointPadding: 0.3,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: "timetaken by " + this.arrayItem.final_assignment_data.user4.name,
                            color: 'rgba(126,86,134,.9)',
                            data: this.arrayItem.final_assignment_data.user4.time,
                            pointPadding: 0.4,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: this.arrayItem.final_assignment_data.user5.name,
                            color: 'yellow',
                            data: this.arrayItem.final_assignment_data.user5.data,
                            pointPadding: 0.3,
                            pointPlacement: -0.2
                        }, {
                            type: 'column',
                            name: "timetaken by " + this.arrayItem.final_assignment_data.user5.name,
                            color: 'rgba(126,86,134,.9)',
                            data: this.arrayItem.final_assignment_data.user5.time,
                            pointPadding: 0.4,
                            pointPlacement: -0.2
                        }]
                        // [{
                        //     type: 'column',
                        //     name: 'user 1',
                        //     color: 'red',
                        //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        //     pointPadding: 0.3,
                        //     pointPlacement: -0.2
                        // }, {
                        //     type: 'column',
                        //     name: 'user 2',
                        //     color: 'green',
                        //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
                        //     pointPadding: 0.3,
                        //     pointPlacement: -0.2
                        // }, {
                        //     type: 'column',
                        //     name: 'user 3',
                        //     color: 'yellow',
                        //     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
                        //     pointPadding: 0.3,
                        //     pointPlacement: -0.2
                        // }, {
                        //     type: 'column',
                        //     name: 'user 4',
                        //     color: 'black',
                        //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
                        //     pointPadding: 0.3,
                        //     pointPlacement: -0.2
                        // }, {
                        //     type: 'column',
                        //     name: 'user 5',
                        //     color: 'blue',
                        //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
                        //     pointPadding: 0.3,
                        //     pointPlacement: -0.2
                        // }]


                        // },
                        // title: {
                        //     text: 'Monthly Average Rainfall'
                        // },
                        // subtitle: {
                        //     text: 'Source: WorldClimate.com'
                        // },
                        // xAxis: {
                        //     categories: [
                        //         'Jan',
                        //         'Feb',
                        //         'Mar',
                        //         'Apr',
                        //         'May',
                        //         'Jun',
                        //         'Jul',
                        //         'Aug',
                        //         'Sep',
                        //         'Oct',
                        //         'Nov',
                        //         'Dec'
                        //     ],
                        //     crosshair: true
                        // },
                        // yAxis: {
                        //     min: 0,
                        //     title: {
                        //         text: 'Rainfall (mm)'
                        //     }
                        // },
                        // tooltip: {
                        //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        //     footerFormat: '</table>',
                        //     shared: true,
                        //     useHTML: true
                        // },
                        // plotOptions: {
                        //     column: {
                        //         pointPadding: 0.2,
                        //         borderWidth: 0
                        //     }
                        // },
                        // series: [
                        //     {
                        //         type:'column',
                        //     name: 'Tokyo',
                        //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                        // }, {
                        //     type:'column',
                        //     name: 'New York',
                        //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                        // }, {
                        //     type:'column',
                        //     name: 'London',
                        //     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                        // }, {
                        //     type:'column',
                        //     name: 'Berlin',
                        //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                        // }]
                    });



                    // integration guage chart

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

                },
                error => {
                    alert(" error :" + error.message);
                });
    }



    // integration guage chart

    //     Highcharts.chart({

    //         chart: {
    //             renderTo: 'angleGauge',
    //             type: 'gauge',
    //             plotBackgroundColor: null,
    //             plotBackgroundImage: null,
    //             plotBorderWidth: 0,
    //             plotShadow: false
    //         },

    //         title: {
    //             text: 'Angle'
    //         },

    //         pane: {
    //             startAngle: -150,
    //             endAngle: 150,
    //             background: [{
    //                 backgroundColor: {
    //                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                     stops: [
    //                         [0, '#FFF'],
    //                         [1, '#333']
    //                     ]
    //                 },
    //                 borderWidth: 0,
    //                 outerRadius: '109%'
    //             }, {
    //                 backgroundColor: {
    //                     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                     stops: [
    //                         [0, '#333'],
    //                         [1, '#FFF']
    //                     ]
    //                 },
    //                 borderWidth: 2,
    //                 outerRadius: '107%'
    //             }, {
    //                 // default background
    //             }, {
    //                 backgroundColor: '#DDD',
    //                 borderWidth: 0,
    //                 outerRadius: '105%',
    //                 innerRadius: '103%'
    //             }]
    //         },

    //         // the value axis
    //         yAxis: {
    //             min: -90,
    //             max: 90,
    //             minorTickInterval: 'auto',
    //             minorTickWidth: 1,
    //             minorTickLength: 10,
    //             minorTickPosition: 'inside',
    //             minorTickColor: '#666',
    //             tickPixelInterval: 10,
    //             tickWidth: 2,
    //             tickPosition: 'inside',
    //             tickLength: 10,
    //             tickColor: '#666',
    //             labels: {
    //                 step: 2,
    //                 rotation: 1
    //             },
    //             title: {
    //                 text: 'degrees'
    //             },
    //             plotBands:
    //                 [{
    //                     innerRadius: '50%',
    //                     outerRadius: '100%'
    //                 }, {
    //                     from: 30,
    //                     to: 90,
    //                     color: '#DF5353' // green
    //                 }, {
    //                     from: -30,
    //                     to: 30,
    //                     color: 'green' // green
    //                 }, {
    //                     from: -90,
    //                     to: -30,
    //                     color: '#DF5353' // red
    //                 }]
    //         },

    //         series: [{
    //             type: 'gauge',
    //             name: 'Speed',
    //             data: [0],
    //             tooltip: {
    //                 valueSuffix: ' o degrees'
    //             }
    //         }]

    //     },
    //       // Add some life
    //     );
    // }

    //   Highcharts.chart('container', {

    //     chart: {
    //       renderTo: 'container',
    //       type: 'gauge',
    //       plotBackgroundColor: null,
    //       plotBackgroundImage: null,
    //       plotBorderWidth: 0,
    //       plotShadow: false
    //     },

    //     title: {
    //       text: 'Angle'
    //     },

    //     pane: {
    //       startAngle: -150,
    //       endAngle: 150,
    //       background: [{
    //         backgroundColor: {
    //           linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //           stops: [
    //             [0, '#FFF'],
    //             [1, '#333']
    //           ]
    //         },
    //         borderWidth: 0,
    //         outerRadius: '109%'
    //       }, {
    //         backgroundColor: {
    //           linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //           stops: [
    //             [0, '#333'],
    //             [1, '#FFF']
    //           ]
    //         },
    //         borderWidth: 1,
    //         outerRadius: '107%'
    //       }, {
    //         // default background
    //       }, {
    //         backgroundColor: '#DDD',
    //         borderWidth: 0,
    //         outerRadius: '105%',
    //         innerRadius: '103%'
    //       }]
    //     },

    //     // the value axis
    //     yAxis: {
    //       min: -90,
    //       max: 80,

    //       minorTickInterval: 'auto',
    //       minorTickWidth: 1,
    //       minorTickLength: 10,
    //       minorTickPosition: 'inside',
    //       minorTickColor: '#666',

    //       tickPixelInterval: 30,
    //       tickWidth: 2,
    //       tickPosition: 'inside',
    //       tickLength: 10,
    //       tickColor: '#666',
    //       labels: {
    //         step: 2,
    //         rotation: 'auto'
    //       },
    //       title: {
    //         text: 'degrees'
    //       },
    //       plotBands: [{
    //         from: -90,
    //         to: -30,
    //         color: 'red' // green
    //       }, {
    //         from: -30,
    //         to: 30,
    //         color: 'green' // yellow
    //       }, {
    //         from: 30,
    //         to: 80,
    //         color: 'red' // red
    //       }]
    //     },

    //     series: [{
    //       name: 'angle',
    //       data: [0],
    //       tooltip: {
    //         valueSuffix: ' deg '
    //       }
    //     }]

    //   });
    // }

    // code for integration




    // Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
    //     Highcharts.seriesTypes.column.prototype.drawLegendSymbol;

    // var chartColors = ['#828282', '#424242'];
    // var gaugePBColors = ['#ee745e', '#ffdd62', '#6ed08c'];

    /* Highcharts.chart({

         chart: {
             renderTo: 'gauge01',
             type: 'gauge',
             backgroundColor: 'none'
         },

         colors: [
             '#828282', '#424242'
         ],

         credits: {
             enabled: false
         },

         title: {
             text: 'graph',
             style: {
                 fontFamily: 'arial,helvetica,sans-serif',
                 color: '#424242',
                 fontWeight: 'bold',
                 fontSize: '24px'
             }
         },

         legend: {
             align: 'left',
             verticalAlign: 'bottom',
             layout: 'vertical',
             x: 0,
             y: -112,
             floating: true,
             borderWidth: 0
         },

         navigation: {
             buttonOptions: {
                 // floating: true,
                 align: 'right',
                 verticalAlign: 'bottom',
                 y: -134,
                 // backgroundColor: 'white',
                 // borderWidth: 0,
                 symbolSize: 20
             },
             menuStyle: {
                 borderWidth: 0,
                 backgroundColor: '#424242',
                 // borderRadius: '7px',
                 padding: '5px 0',
                 overflow: 'hidden',
                 BoxShadow: '2px 2px 4px rgba(255,0,0,1) !important'
             },
             menuItemStyle: {
                 fontSize: '12px',
                 color: '#ffffff',
                 padding: '3px 12px 5px'
             },
             menuItemHoverStyle: {
                 backgroundColor: '#828282'
             }
         },

         exporting: {
             buttons: {
                 exportButton: {
                     symbolFill: '#424242',
                     symbolStroke: '#424242',
                     hoverSymbolFill: '#828282',
                     hoverSymbolStroke: '#828282'
                 },
                 printButton: {
                     enabled: false
                 }
             }
         },

         pane: {
                 startAngle: -150,
                 endAngle: 150
               },

         yAxis: [{
             min: 1,
             max: 7,
             lineColor: 'transparent',
             tickWidth: 2,
             tickLength: 12,
             tickColor: 'transparent',
             //'#ffffff',
             minorTickColor: 'transparent',
             labels: {
                 rotation: null,
                 distance: 15,
                 zIndex: 1
             },
             plotBands: [{
                 from: 1,
                 to: 4,
                 color: '#ee745e',
                 innerRadius: '50%',
                 outerRadius: '100%'
             }, {
                 from: 4,
                 to: 6,
                 color:'#ffdd62',
                 innerRadius: '50%',
                 outerRadius: '100%'
             }, {
                 from: 6,
                 to: 7,
                 color:'#6ed08c',
                 innerRadius: '50%',
                 outerRadius: '100%'
             }],
             pane: 0
         }],

         plotOptions: {
             gauge: {
                 dial: {
                     radius: '100%',
                     baseWidth: 7,
                     // baseLength: 14,
                     // rearLength: 0
                 },
                 pivot: {
                     radius: 3,
                     backgroundColor: '#424242'
                 },
                 showInLegend: true
             }
         },


         series: [{
             type: 'gauge',
             name: 'Fiktivia A/S',
             data: [4.5],
             dial: {
                 backgroundColor:'#828282'
             },
             yAxis: 0,
             dataLabels: {
                 enabled: true,
                 x: 44,
                 y: -157,
                 color: '#828282',
                 borderWidth: 0,
                 borderRadius: 7,
                 backgroundColor: '#ffffff',
                 padding: 1,
                 style: {
                     fontSize: '20px',
                     fontWeight: 'bold',
                     lineHeight: '40px'
                 }
             }
         }, {
             type:'gauge',
             name: 'Afdeling X',
             data: [5.1],
             dial: {
                 backgroundColor:'#424242'
             },
             yAxis: 0,
             dataLabels: {
                 enabled: true,
                 x: 96,
                 y: -135,
                 color: '#424242',
                 borderWidth: 0,
                 borderRadius: 7,
                 backgroundColor: '#ffffff',
                 padding: 1,
                 style: {
                     fontSize: '20px',
                     fontWeight: 'bold',
                     lineHeight: '40px'
                 }
             }
         }]
     });*/

    // gauge chart fro profile performance
    //  Highcharts.chart('container', {
    //   title: {
    //     text: "Angle"
    //   },
    //   subtitle: {
    //     text: ""
    //   },
    //   plotOptions: {
    //     series: {
    //       allowPointSelect: true,
    //       states: {
    //         hover: {
    //           color: "#a4edba"
    //         },
    //         select: {
    //           color: "#EFFFEF",
    //           borderColor: "black",
    //           // dashStyle: "dot"
    //         }
    //       },
    //       animation: false
    //     }
    //   },
    //   exporting: {},
    //   credits: {
    //     text: "cloud.highcharts.com",
    //     href: "https://cloud.highcharts.com"
    //   },
    //   chart: {
    //     type: "gauge",
    //     plotBackgroundColor: null,
    //     plotBackgroundImage: null,
    //     plotBorderWidth: 0,
    //     plotShadow: false
    //   },
    //   pane: {
    //     startAngle: -150,
    //     endAngle: 150
    //   },
    // yAxis: {
    //   min: -90,
    //   max: 90,
    //   minorTickInterval: "auto",
    //   minorTickWidth: 1,
    //   minorTickLength: 10,
    //   minorTickPosition: "inside",
    //   minorTickColor: "#666",
    //   tickPixelInterval: 10,
    //   tickWidth: 2,
    //   tickPosition: "inside",
    //   tickLength: 10,
    //   tickColor: "#666",
    //   labels: {
    //    step: 2,
    //     rotation: "auto"
    //   },
    //   title: {
    //     text: "degrees"
    //   },
    //   plotBands: [
    //     {
    //       innerRadius: "50%",
    //       outerRadius: "100%"
    //     },
    //     {
    //       from: 30,
    //       to: 90,
    //       color: "#DF5353"
    //     },
    //     {
    //       from: -30,
    //       to: 30,
    //       color: "green"
    //     },
    //     {
    //       from: -90,
    //       to: -30,
    //       color: "#DF5353"
    //     }
    //   ]
    // },
    //   series: [
    //     {
    //       turboThreshold: 0,
    //       _colorIndex: 0,
    //       _symbolIndex: 0,
    //       tooltip: {
    //         valueSuffix: '0 degree'
    //       }
    //     }
    //   ],
    //   data: {
    //     csv: "\"Category\";\"Speed\"\n0;0",
    //     // googleSpreadsheetKey: false,
    //     // googleSpreadsheetWorksheet: false,
    //     seriesMapping: [
    //       {
    //         x: 0,
    //         y: 1
    //       }
    //     ]
    //   },
    //   stockTools: {
    //     gui: {
    //       // buttons: [
    //       //   "simpleShapes",
    //       //   "lines",
    //       //   "crookedLines"
    //       // ],
    //       enabled: false
    //     }
    //   },
    //   navigation: {
    //     events: {
    //       showPopup: "function(e){this.chart.indicatorsPopupContainer||(this.chart.indicatorsPopupContainer=document.getElementsByClassName(\"highcharts-popup-indicators\")[0]),this.chart.annotationsPopupContainer||(this.chart.annotationsPopupContainer=document.getElementsByClassName(\"highcharts-popup-annotations\")[0]),\"indicators\"===e.formType?this.chart.indicatorsPopupContainer.style.display=\"block\":\"annotation-toolbar\"===e.formType&&(this.chart.activeButton||(this.chart.currentAnnotation=e.annotation,this.chart.annotationsPopupContainer.style.display=\"block\")),this.popup&&(c=this.popup)}",
    //       closePopup: "function(){this.chart.annotationsPopupContainer.style.display=\"none\",this.chart.currentAnnotation=null}",
    //     selectButton: "function(e){var t=e.button.className+\" highcharts-active\";e.button.classList.contains(\"highcharts-active\")||(e.button.className=t,this.chart.activeButton=e.button)}",
    //     deselectButton: "function(e){e.button.classList.remove(highcharts-active),this.chart.activeButton=null}"
    //     },
    //     bindingsClassName: "tools-container"
    //   },
    //   annotations: []
    // });



}
