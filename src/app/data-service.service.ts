import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  courseId: any;
  url = 'http://192.168.1.189:8000/course/13/';
  data:any;

  constructor(private http: HttpClient) { }

  getCoursesData(id) {
    // perticular course details
    // return this.http.get(this.url+id+'/');
   return this.http.get(this.url)
    .subscribe(data => {
       data.toString();
       console.log(data);
       return data;
     });
  }
  fetchCourses(){

  }
}
