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

  constructor(private route: ActivatedRoute, private service: DataServiceService, private http: HttpClient) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    // this.data = this.service.getCoursesData(this.id)
    // this.data = this.http.get('http://192.168.1.189:8000/course/13/')
    // .subscribe(data => {
    //    data.toString();
    //    console.log(data);
    //    this.data = data;
    //  });
    // console.log('url output =',this.data);

    if (this.id == 1) {

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
        chapters: [
          {
            sl_no: 100,
            topics: [
              {
                sl_no: 101,
                name: "Introduction"
              },
              {
                sl_no: 103,
                name: "Working with the python interactive shell"
              },
              {
                sl_no: 105,
                name: "Writing and running simple scripts"
              },
              { sl_no: 107, name: "Python keywords, identifiers and variables" },
              { sl_no: 109, name: "User input, comments and indentations" },
              { sl_no: 111, name: "summary" }],
            name: "Introducing Python"
          },
          {
            sl_no: 200,
            topics: [
              { sl_no: 201, name: "Python numbers" },
              { sl_no: 203, name: "Python strings" },
              { sl_no: 205, name: "Python list" },
              { sl_no: 207, name: "Python tuple" },
              { sl_no: 209, name: "Python set" },
              { sl_no: 211, name: "Python dictionary" },
              { sl_no: 213, name: "Conversion between data types" },
              { sl_no: 215, name: "Python input output and import" },
              { sl_no: 217, name: "Python operators" },
              { sl_no: 219, name: "Python namespace and scope" }
            ],
            name: "Data Types"
           }]
          // {
          //   "sl_no": 300,
          //   "topics": [
          //     { "sl_no": 301, "name": "Introduction" },
          //     { "sl_no": 303, "name": "Control statement" },
          //     { "sl_no": 305, "name": "The if statement" },
          //     { "sl_no": 307, "name": "The while statement" },
          //     { "sl_no": 309, "name": "While vs if" },
          //     { "sl_no": 311, "name": "Loops" },
          //     { "sl_no": 313, "name": "The for loops" },
          //     { "sl_no": 315, "name": "The range function" },
          //     { "sl_no": 317, "name": "Nesting loops" },
          //     { "sl_no": 319, "name": "Breaking out of loops" }
          //   ],
          //   "name": "Control Statements"
          // },
          // {
          //   "sl_no": 400,
          //   "topics": [
          //     { "sl_no": 401, "name": "Introduction" },
          //     { "sl_no": 403, "name": "Built-in functions" },
          //     { "sl_no": 405, "name": "User-defined functions" },
          //     { "sl_no": 407, "name": "Function arguments" },
          //     { "sl_no": 409, "name": "Anonymous functions" },
          //     { "sl_no": 411, "name": "Summary" }
          //   ],
          //   "name": "Functions"
          // },
          // {
          //   "sl_no": 500,
          //   "topics": [
          //     { "sl_no": 501, "name": "Introduction" },
          //     { "sl_no": 503, "name": "List syntax" },
          //     { "sl_no": 505, "name": "List methods" },
          //     { "sl_no": 507, "name": "List comprehensions" },
          //     { "sl_no": 509, "name": "Tuple syntax" },
          //     { "sl_no": 511, "name": "Accessing tuple elements using indexing" },
          //     { "sl_no": 513, "name": "Accessing tuple elements using slicing" },
          //     { "sl_no": 515, "name": "Tuple methods" },
          //     { "sl_no": 517, "name": "Summary" }
          //   ],
          //   "name": "Lists and Tuples"
          // },
          // {
          //   "sl_no": 600,
          //   "topics": [
          //     { "sl_no": 601, "name": "Introduction" },
          //     { "sl_no": 603, "name": "Working with dictionaries" },
          //     { "sl_no": 605, "name": "Additional dictionary attributes" },
          //     { "sl_no": 607, "name": "Ordered dictionaries" },
          //     { "sl_no": 609, "name": "The basics of sets" },
          //     { "sl_no": 611, "name": "Set operations" },
          //     { "sl_no": 613, "name": "Frozen sets" },
          //     { "sl_no": 615, "name": "Summary" }
          //   ],
          //   "name": "Dictionaries and Sets"
          // }, {
          //   "sl_no": 700,
          //   "topics": [{ "sl_no": 701, "name": "Introduction" },
          //   { "sl_no": 703, "name": "A first look at oop" },
          //   { "sl_no": 705, "name": "OOP in python" },
          //   { "sl_no": 707, "name": "Methods in a class" },
          //   { "sl_no": 709, "name": "Class versus instance attributes" },
          //   { "sl_no": 711, "name": "Class versus instance methods" },
          //   { "sl_no": 713, "name": "Class inheritance" },
          //   { "sl_no": 715, "name": "Multiple inheritance" },
          //   { "sl_no": 717, "name": "Summary" }],
          //   "name": "Object-Oriented Programming"
          // }, {
          //   "sl_no": 800, "topics": [{ "sl_no": 801, "name": "Introduction" },
          //   { "sl_no": 803, "name": "Defining modules" },
          //   { "sl_no": 805, "name": "Imports and import statements" },
          //   { "sl_no": 807, "name": "Modules and packages" },
          //   { "sl_no": 809, "name": "File operations" },
          //   { "sl_no": 811, "name": "The file object" },
          //   { "sl_no": 813, "name": "Reading and writing to files" },
          //   { "sl_no": 815, "name": "Handling structured data" }],
          //   "name": "Modules, Packages,and File Operations"
          // }, {
          //   "sl_no": 900, "topics": [
          //     { "sl_no": 901, "name": "What is NumPy" },
          //     { "sl_no": 903, "name": "Installing Numpy" }],
          //   "name": "Introduction-Numpy"
          // },
          // {
          //   "sl_no": 1000, "topics": [
          //     { "sl_no": 1001, "name": "Numpy arrays" },
          //     { "sl_no": 1003, "name": "Creating arrays" },
          //     { "sl_no": 1005, "name": "Save and load methods for ndarray" },
          //     { "sl_no": 1007, "name": "np.reshape" },
          //     { "sl_no": 1009, "name": "np.flatten" },
          //     { "sl_no": 1011, "name": "Dot product" }],
          //   "name": "Numpy fundamentals-Numpy"
          // },
          // {
          //   "sl_no": 1100, "topics": [
          //     { "sl_no": 1101, "name": "Data Structures" },
          //     { "sl_no": 1103, "name": "Series" },
          //     { "sl_no": 1105, "name": "Series creation" },
          //     { "sl_no": 1107, "name": "Using numpy.ndarray" },
          //     { "sl_no": 1109, "name": "Dictionary" },
          //     { "sl_no": 1111, "name": "Scalar values" }],
          //   "name": "Introduction-Pandas"
          // }]
        
      }
    }
  }
}
