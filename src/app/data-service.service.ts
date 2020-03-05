import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  courseId: any;
  // url = 'http://192.168.0.123:9000/';
  url = environment.url;
  userName = "user_Name";
  userId = "user_id";
  groupId = "group_id";
  syllabus="SYLLABUS";


  data: any;

  constructor(private http: HttpClient) { }

  lastActivity(id: any, cat: any, course_slno: any, topic_slno: any, chapterIndex: number, topicIndex: any) {
    console.log("The request sending in lastActivity is ", { 'id': id, 'cat': cat, 'course_slnno': course_slno, 'topic_slno': topic_slno, 'chapterIndex': chapterIndex, 'topicIndex': topicIndex })
    return this.http.post(this.url + 'topic_lastactivity', { 'id': id, 'cat': cat, 'course_slnno': course_slno, 'topic_slno': topic_slno, 'chapterIndex': chapterIndex, 'topicIndex': topicIndex });
  }

  getContentDisplay(id: any) {
    return this.http.get(this.url + "contentsDisplay/course/" + id);
  }

  getRegisteredCourses() {
    return this.http.get(this.url + 'registeredCourses/');
  }

  checkOut(course_id: any) {
    return this.http.get(this.url + 'cartCheckout/course/' + course_id);
  }

  addToCart(id: any) {
    return this.http.get(this.url + 'addToCart/course/' + id);
  }

  removeFromCart(course_id) {
    return this.http.get(this.url + 'deleteFromCart/' + course_id);
  }

  getCartComponent() {
    return this.http.get(this.url + 'cart');
  }

  getDashBoardData(courseId, userId) {
    return this.http.post(this.url, { 'userid': userId, 'courseid': courseId });
  }

  getCoursesData(id: any) {
    // perticular course details
    return this.http.get(this.url + 'course/' + id + '/');
  }

  fetchCourses() {
    return this.http.get(this.url + 'courses/');
  }


  setUserDetails(userName: any, user_id: any) {
    // if(localStorage.getItem(this.userName)==undefined || localStorage.getItem(this.userId)==undefined)
    // {
    localStorage.setItem(this.userName, userName);
    localStorage.setItem(this.userId, user_id);
    // localStorage.setItem(this.groupId,group_id);
    // console.log("USer details are created in the localstorage");
    // }
  }

  getUSerDetails() {
    var userId = localStorage.getItem(this.userId);
    var group_id = localStorage.getItem(this.groupId);
    var userName = localStorage.getItem(this.userName);
    return { 'userId': userId, 'userName': userName, 'groupId': group_id };
  }

  getUserProfile() {
    return this.http.get(this.url + 'profile/');
  }

  fetchRegisteredCourses() {
    return this.http.get(this.url + 'Registered_courses_generator');
  }

  getGroupId(courseId: any) {
    return this.http.get(this.url + 'chat/' + courseId);
  }

  setSyllabusInLocalStorage(syllabus:any,course_id:number){
      localStorage.setItem(this.syllabus+course_id,syllabus);
  }

  getSyllabusFromLocalStorage(course_id:number){
    return JSON.parse(localStorage.getItem(this.syllabus+course_id));
  }

}
