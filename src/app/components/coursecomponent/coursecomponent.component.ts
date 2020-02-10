import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-coursecomponent',
  templateUrl: './coursecomponent.component.html',
  // tslint:disable-next-line: max-line-length
  styleUrls: ['./coursecomponent.component.css', '../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class CoursecomponentComponent implements OnInit {

  data: any;

  constructor(private router:Router) { }

  ngOnInit() {

    this.data = [
      {
        id: '1',
        name: 'ML Bootcamp',
        description: 'A landing for shared workspaces with date picker functionality.',
        duration: '4 days',
        amount: '6000',
        discount: '0',
        discountPercent: '24% off',
        imageUrl: '/assets/images/mnist.png',
        
      },
      {
        id: '2',
        name: 'Machine Learning',
        description: 'A landing for shared workspaces with date picker functionality.',
        duration: '60 days',
        amount: '10000',
        discount: '0',
        discountPercent: '24% off',
        imageUrl: '/assets/images/ML.png',
        
      },
      {
        id: '3',
        name: 'Cloud computing',
        description: 'A landing for shared workspaces with date picker functionality.',
        duration: '60 days',
        amount: '8000',
        discount: '0',
        discountPercent: '24% off',
        imageUrl: '/assets/images/PythonWithDjango.png',
        
      }
    ];

  }

  onSelect(course:any)
  {
    this.router.navigate(['coursedetails',course.id])
    // console.log("The button id that is selected is "+course.id)
  }


}
