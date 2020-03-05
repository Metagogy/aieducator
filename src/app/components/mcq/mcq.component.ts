import { Component, OnInit, ViewChild } from '@angular/core';
import { TestandtopicService } from 'src/app/services/testandtopic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import { InteractionserviceService } from 'src/app/services/interactionservice.service';
import { DataServiceService } from 'src/app/data-service.service';


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
  finalAnsResponse: any;
  test_percentile: any;
  name: any;
  loading: boolean;
  chapterIndex: number=0;
  testINdex: number=0;
  msg:any;
  responseCopy:any;

  constructor(private dataService:DataServiceService,private interactionService: InteractionserviceService, private service: TestandtopicService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(() => {
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
    this.loading = false;
    // console.log(this.loading);
    clearInterval(this.sec);
    if (this.count == this.response["totalcount"]) {
      this.completedassign = true;
      this.responseCopy=this.dataService.getSyllabusFromLocalStorage(this.courseid)
        
        if(this.responseCopy[this.chapterIndex]['test'][this.testINdex]['is_read']==false)
        {
          this.responseCopy[this.chapterIndex]['test'][this.testINdex]['is_read']=true;
          this.dataService.setSyllabusInLocalStorage(JSON.stringify(this.responseCopy),this.courseid);
          this.interactionService.sendResonseCopy(this.responseCopy);
          console.log("The mcq became true");
        }
      
      console.log("The status of current mcq is  ",this.responseCopy[this.chapterIndex]['test'][this.testINdex]['is_read'])

     

      this.service.getSecondMethod(this.courseid, this.chapterid, this.testid, this.count, this.submitAns1, question, this.countdown.i.value / 1000, this.chapterIndex, this.testINdex).subscribe(res => {
      this.finalAnsResponse = res["final_result"];
      this.test_percentile = res["test_percentile"]
      }, error => {
        console.log("An error occured while fetching second question");
      });
    }
    else {
      this.service.getSecondMethod(this.courseid, this.chapterid, this.testid, this.count, this.submitAns1, question, this.countdown.i.value / 1000, this.chapterIndex, this.testINdex).subscribe(res => {
        this.sec = 60;
        this.countdown.restart();
        this.countdown.begin();
        this.response = res;
        this.question = res["Question"];
        this.answers = res["Answers"];
        this.loading = true;
      }, error => {
        console.log("An error occured while fetching second question");
      });
    }
  }



  initDuplicate() {
    this.msg=this.interactionService.getTestDetails();
    this.chapterIndex=this.msg.testChapterIndex;
    this.testINdex=this.msg.testIndex;

    this.loading = false;
    this.count = 0;
    this.sec = 60;
    this.courseid = this.route.snapshot.parent.paramMap.get('id');
    this.chapterid = this.route.snapshot.paramMap.get('chapter_id');
    this.testid = this.route.snapshot.paramMap.get('test_id');

    // console.log("The request sending for fetching mcq is ",this.courseid, this.chapterid, this.testid, this.count, this.chapterIndex)

    this.service.getMcq(this.courseid, this.chapterid, this.testid, this.count, this.chapterIndex, this.testINdex).subscribe(res => {
      this.countdown.begin();
      this.response = res;
      this.question = res["Question"];
      this.answers = res["Answers"];
      this.loading = true;
    }, error => {
      console.log("You caught an error")
    });
  }

  ngOnInit() {
   
  }
}
