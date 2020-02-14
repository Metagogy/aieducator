import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-coursedetailslaptop',
  templateUrl: './coursedetailslaptop.component.html',
  styleUrls: ['./coursedetailslaptop.component.css']
})
export class CoursedetailslaptopComponent implements OnInit {
  data: any;
  id: any;
  data1: any;
  chapters:any;

  constructor(private route: ActivatedRoute, private service: DataServiceService, private http: HttpClient) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.data = this.service.getCoursesData(this.id).subscribe(data => {
      this.data = data.course;
      this.chapters = data.course.chapters;
      console.log('url output =', this.data);
      console.log('chapter output =', this.chapters);
    });
    

    // if (this.id == 1) {

    //   this.data =
    //   {
    //     id: '1',
    //     title: 'ML Bootcamp',
    //     description: 'A landing for shared workspaces with date picker functionality.',
    //     duration: '4 days',
    //     price: '6,000',
    //     no_of_video: '2 videos',
    //     no_of_lect: '20 lectures',
    //     no_of_quiz: '56 quizez',
    //     student_enrolled: '400 students enrolled',
    //     instructor: 'Manish',
    //     discount: '900',
    //     discountPercent: '20% off',
    //     imageUrl: '/assets/images/mnist.png',
    //     ratings: '4.8',
    //     details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //     chapters: [
    //       {
    //         sl_no: 100,
    //         topics: [
    //           {
    //             sl_no: 101,
    //             name: "Introduction"
    //           },
    //           {
    //             sl_no: 103,
    //             name: "Working with the python interactive shell"
    //           },
    //           {
    //             sl_no: 105,
    //             name: "Writing and running simple scripts"
    //           },
    //           { sl_no: 107, name: "Python keywords, identifiers and variables" },
    //           { sl_no: 109, name: "User input, comments and indentations" },
    //           { sl_no: 111, name: "summary" }],
    //         name: "Introducing Python"
    //       },
    //       {
    //         sl_no: 200,
    //         topics: [
    //           { sl_no: 201, name: "Python numbers" },
    //           { sl_no: 203, name: "Python strings" },
    //           { sl_no: 205, name: "Python list" },
    //           { sl_no: 207, name: "Python tuple" },
    //           { sl_no: 209, name: "Python set" },
    //           { sl_no: 211, name: "Python dictionary" },
    //           { sl_no: 213, name: "Conversion between data types" },
    //           { sl_no: 215, name: "Python input output and import" },
    //           { sl_no: 217, name: "Python operators" },
    //           { sl_no: 219, name: "Python namespace and scope" }
    //         ],
    //         name: "Data Types"
    //        }]

  }
}
