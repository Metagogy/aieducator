import { Component, OnInit, ViewChild } from '@angular/core';
import { TestandtopicService } from 'src/app/services/testandtopic.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CountdownComponent} from 'ngx-countdown';


@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})

export class McqComponent implements OnInit {

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;

  courseid: any;
  chapterid: any;
  testid: any;
  count: any;
  question: any;
  answers: any;
  submitAns: string;
  sec: any;
  completedassign: boolean;
  response: any;
  submitAns1: any;
  ansId: any;
  finalAnsResponse:any;
  test_percentile:any;
  name:any;
  loading:boolean;

  // startCountdown() {
  //   var counter = 60;
  //   this.sec=60;
  //   setInterval(() => {
  //     this.sec = counter;
  //     counter--;
  //     if (this.sec < 0) {
  //       this.sec = "Finished";
  //       clearInterval(counter);
  //     };
  //   }, 1000);
  // }
  

  constructor(private service: TestandtopicService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(() => {
      // console.log("Hello you have selected another choice");
      this.initDuplicate()
    })
  }

  ansChanged(answer: any) {
    this.submitAns1 = answer;
    // console.log(answer)
  }

  onSubmitMCQ(question: any) {
    this.question = "";
    this.answers = [];
    this.count++;
    this.loading=false;
    // console.log(this.loading);
    clearInterval(this.sec);
    if (this.count == this.response["totalcount"]) {
      // console.log("Hurray, Your assignment is completed!!!");
      this.completedassign = true;
      
      // console.log(this.completedassign);
      this.service.getSecondMethod(this.courseid, this.chapterid, this.testid, this.count, this.submitAns1, question,this.countdown.i.value/1000).subscribe(res => {
        // console.log(res);
        this.finalAnsResponse=res["final_result"];
        this.test_percentile=res["test_percentile"]
        // console.log("The final ans response is ");
        // console.log(this.finalAnsResponse);
      }, error => {
        console.log("An error occured while fetching second question");
      });
    }
    else {
      // console.log(this.countdown.i.value);
      this.service.getSecondMethod(this.courseid, this.chapterid, this.testid, this.count, this.submitAns1, question,this.countdown.i.value/1000).subscribe(res => {
        // console.log(res);
        this.sec=60;
        this.countdown.restart();
        this.countdown.begin();
        this.response = res;
        this.question = res["Question"];
        this.answers = res["Answers"];
        this.loading=true;
        // console.log(this.loading)
      }, error => {
        console.log("An error occured while fetching second question");
      });
    }
  }



  initDuplicate(){
    this.loading=false;
    // console.log(this.loading)
    this.count = 0;
    this.sec=60;
    this.courseid = '13';
    this.chapterid = this.route.snapshot.paramMap.get('chapter_id');
    this.testid = this.route.snapshot.paramMap.get('test_id');
    this.service.getMcq(this.courseid, this.chapterid, this.testid, this.count).subscribe(res => {
    this.countdown.begin();
    this.response = res;
    this.question = res["Question"];
    this.answers = res["Answers"];
    this.loading=true;
    // console.log(this.loading)
  }, error => {
      console.log("You caught an error")
    });
  }


  ngOnInit() {
    
  }
}
