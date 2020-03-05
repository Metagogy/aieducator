import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionserviceService {

  private _loginStatus = new Subject<boolean>();
  loginStatus$ = this._loginStatus.asObservable();

  // private _topic = new Subject<any>();
  // topic$ = this._topic.asObservable();

  private _responseCopy = new Subject<any>();
  responseCopy$ = this._responseCopy.asObservable();


  // private _test = new Subject<any>();
  // test$ = this._test.asObservable();

  // private _assign = new Subject<any>();
  // assign$ = this._assign.asObservable();

  public chapterIndex: number;
  public assignId: number;

  public testChapterIndex: number;
  public testIndex: number;

  constructor() { }

  sendToParent(msg: boolean) {
    // console.log("Send to parent method is called");
    this._loginStatus.next(msg);
  }

  // sendTopic(chapterNoIndex: any, topicNoIndex: any) {
  //   this._topic.next({ 'chapterIndex': chapterNoIndex, 'topicIndex': topicNoIndex });
  // }

  saveTestDetails(chapterIndex: any, testIndex: any) {
    this.testChapterIndex = chapterIndex;
    this.testIndex = testIndex;
  }

  getTestDetails() {
    return { 'testChapterIndex': this.testChapterIndex, 'testIndex': this.testIndex }
  }

  // sendAssign(chapterIndex: any, problemIndex: any) {
  //   this._assign.next({ 'chapterIndex': chapterIndex, 'problemIndex': problemIndex });
  // }


  saveAssignDetails(chapterIndex: number, assignID: number) {
    this.chapterIndex = chapterIndex;
    this.assignId = assignID;
  }


  sendResonseCopy(response: any) {
    console.log("Sending response copy in interaction service");
    this._responseCopy.next(response);
  }

  getAssignDetails() {
    return { 'chapterIndex': this.chapterIndex, 'assignId': this.assignId };
  }

}
