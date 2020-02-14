import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  courseId: any;
  url = 'http://192.168.1.189:8000/';
  data:any;
  
  constructor(private http: HttpClient) { }

  getDashBoardData(){
    return this.http.get(this.url);
  }

  getCoursesData(id) {
    // perticular course details
    return this.http.get(this.url+'course/'+id+'/');
  }

  fetchCourses(){
    return this.http.get(this.url+'courses/');
  }

}
