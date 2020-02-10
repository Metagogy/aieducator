import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coursedetailslaptop',
  templateUrl: './coursedetailslaptop.component.html',
  styleUrls: ['./coursedetailslaptop.component.css']
})
export class CoursedetailslaptopComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) { }
  id: any;
  data1: any;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');


    if (this.id == 1){

    this.data =
    {
      id: '1',
      title: 'ML Bootcamp',
      description: 'A landing for shared workspaces with date picker functionality.',
      duration: '4 days',
      price: '6,000',
      no_of_video: '2 videos',
      no_of_lect: '20 lectures',
      no_of_quiz: '56 quizez',
      student_enrolled: '400 students enrolled',
      instructor: 'Manish',
      discount: '900',
      discountPercent: '20% off',
      imageUrl: '/assets/images/mnist.png',
      ratings: '4.8',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      syllabus: {
        parts: [
          {
            id: '1',
            name: 'Python',
            chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          },
          {
            id: '2', name: 'Numpy', chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          },
          {
            id: '3', name: 'MatplotLib',
            chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              { id: '2', name: 'variables and operators' },
              { id: '3', name: 'sets' },
              { id: '4', name: 'list' }
            ]
          },
          {
            id: '4', name: 'Pandas', chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          }
        ]
      }
    };
  }

  else if (this.id == 2){
    this.data =
    {
      id: '2',
      title: 'Machine Learning',
      description: 'A landing for shared workspaces with date picker functionality.',
      duration: '60 days',
      price: '10,000',
      no_of_video: '2 videos',
      no_of_lect: '20 lectures',
      no_of_quiz: '56 quizez',
      student_enrolled: '400 students enrolled',
      instructor: 'Manish',
      discount: '900',
      discountPercent: '20% off',
      imageUrl: '/assets/images/ML.png',
      ratings: '4.8',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      syllabus: {
        parts: [
          {
            id: '1',
            name: 'Python',
            chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          },
          {
            id: '2', name: 'Numpy', chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          },
          {
            id: '3', name: 'MatplotLib',
            chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              { id: '2', name: 'variables and operators' },
              { id: '3', name: 'sets' },
              { id: '4', name: 'list' }
            ]
          },
          {
            id: '4', name: 'Pandas', chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          }
        ]
      }
    };
  }

  else{
    this.data =
    {
      id: '3',
      title: 'Cloud Computing',
      description: 'A landing for shared workspaces with date picker functionality.',
      duration: '60 days',
      price: '8000',
      no_of_video: '2 videos',
      no_of_lect: '20 lectures',
      no_of_quiz: '56 quizez',
      student_enrolled: '400 students enrolled',
      instructor: 'Manish',
      discount: '900',
      discountPercent: '20% off',
      imageUrl: '/assets/images/cloud.jpg',
      ratings: '4.8',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      syllabus: {
        parts: [
          {
            id: '1',
            name: 'Python',
            chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          },
          {
            id: '2', name: 'Numpy', chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          },
          {
            id: '3', name: 'MatplotLib',
            chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              { id: '2', name: 'variables and operators' },
              { id: '3', name: 'sets' },
              { id: '4', name: 'list' }
            ]
          },
          {
            id: '4', name: 'Pandas', chapters: [
              {
                id: '1',
                name: 'Introduction to python',
                topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '2', name: 'variables and operators', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '3', name: 'sets', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              },
              {
                id: '4', name: 'list', topics: [
                  { id: '1', name: 'some dummy text' },
                  { id: '2', name: 'some Dummy text' },
                  { id: '3', name: 'Some temporary text' }
                ]
              }
            ]
          }
        ]
      }
    };
  }

  }

}
