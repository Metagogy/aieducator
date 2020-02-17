import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestandtopicService {

  url = 'http://192.168.1.189:8000/';
  
  constructor(private http:HttpClient) {}

  getSyllabusFromBackend(id:string)
  {
    console.log("Getting syllabus from backened");
    return this.http.get(this.url+"navigation_data/"+id+"/");
  }

  getAssignment(id:any){
    console.log("Getting Assingment from "+this.url+"Assig/"+id);
    return this.http.get(this.url+"Assig/"+id);
  }
  
}
