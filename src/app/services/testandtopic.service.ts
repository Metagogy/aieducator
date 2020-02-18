import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TestandtopicService {

  url = 'http://192.168.0.123:9000/';
  // url = 'http://192.168.1.189:8000/';

  
  constructor(private http:HttpClient) {}

  getSyllabusFromBackend(id:string)
  {
    console.log("Getting syllabus from backened");
    console.log(this.url+"navigation_data/"+id+"/");
    return this.http.get(this.url+"navigation_data/"+id+"/");
  }

  getAssignment(id:any){
    // console.log("Getting Assingment from "+this.url+"Assig/"+id);
    return this.http.get(this.url+"Assig/"+id); 
  }

  getSecondMethod(courseid:any,chapter_id:any,test_id:any,count:any,ans:any,question:any){
    console.log("getting second method");
    console.log({'ans_id':ans.id,'ans_submit':ans.ans,'question':question});
    console.log(this.url+"MCQ/"+courseid+"/"+chapter_id+"/"+test_id+"/"+count);
    return this.http.post(this.url+"MCQ/"+courseid+"/"+chapter_id+"/"+test_id+"/"+count,[{'ans_id':ans.id,'ans_submit':ans.ans,'question':question}])
  }

  getMcq(courseid:any,chapter_id:any,test_id:any,count:any){
      return this.http.get(this.url+"MCQ/"+courseid+"/"+chapter_id+"/"+test_id+"/"+count);
  }

}
