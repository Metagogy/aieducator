import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class TestandtopicService {

  // url = 'http://192.168.0.123:9000/'; 
  url = environment.url;

  constructor(private http:HttpClient) {}

  saveAssignment(id:any, code:any){
    // console.log("Getting Assingment from "+this.url+"Assig/"+id);
    return this.http.post(this.url+"saveProblem/",{'id':id, 'code':code});
  }

  getSyllabusFromBackend(id:string)
  {
    return this.http.get(this.url+"navigation_data/"+id+"/");
  }

  getAssignment(id:any){
       return this.http.get(this.url+"Assig/"+id); 
  }

  getSecondMethod(courseid:any,chapter_id:any,test_id:any,count:any,ans:any,question:any,time:any){
    // console.log("getting second method");
    return this.http.post(this.url+"MCQ/"+courseid+"/"+chapter_id+"/"+test_id+"/"+count,[{'ans_id':ans.id,'ans_submit':ans.ans,'question':question,'time':time}])
  }

  getMcq(courseid:any,chapter_id:any,test_id:any,count:any){
return this.http.post(this.url+"MCQ/"+courseid+"/"+chapter_id+"/"+test_id+"/"+count,{});
  }

  runTestCases(code:any,id:any,time:any,reg_course_id:any){
    return this.http.post(this.url+"alltestcases_verifying/",{'code':code,'id':id,'time':time,'reg_course_id':reg_course_id});
  }

}
