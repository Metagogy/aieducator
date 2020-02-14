import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestandtopicService {

  url = 'http://192.168.1.189:8000/';

  constructor(private http:HttpClient) {}

  getSyllabusFromBackend()
  {
    console.log("Getting syllabus from backened");
    return this.http.get(this.url+"navigation_data/13/");
  }

}
