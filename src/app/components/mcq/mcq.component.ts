import { Component, OnInit } from '@angular/core';
import {TestandtopicService} from 'src/app/services/testandtopic.service';
<<<<<<< HEAD
=======
import {ActivatedRoute,Router} from '@angular/router';
>>>>>>> 39aabe68088ade9659bea5f387711e681fd7ea07

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})

export class McqComponent implements OnInit {

<<<<<<< HEAD
  constructor(private service:TestandtopicService) { }

  ngOnInit() {
    console.log("Hello");
=======
  courseid:any;
  chapterid:any;
  testid:any;
  count:any=0;
  question:any;
  answers:any;
  submitAns:string;
  sec:any=60;

  startCountdown(seconds:number){
    var counter = seconds;
    var interval = setInterval(() => {
      this.sec=counter;
      console.log(counter);
      counter--;
      if(counter < 0 ){
        this.sec="Finished";

        clearInterval(interval);
        console.log('Ding!');
      };
    }, 1000);
  }

  constructor(private service:TestandtopicService,private router:Router,private route:ActivatedRoute) { }

    onSubmitMCQ(question:any){
      this.question="";
      this.answers=[];
      this.count++;
      this.service.getSecondMethod(this.courseid,this.chapterid,this.testid,this.count,{'ans':this.submitAns,'question':question}).subscribe(res=>{
        console.log("The second method response is")  
        console.log(res)
        this.question=res["Question"];
        this.answers=res["Answers"];
      },error=>{
        console.log("An error occured while fetching second question");
      });
    }

  ngOnInit() {
  
    this.courseid='13';
    this.chapterid=this.route.snapshot.paramMap.get('chapter_id');
    this.testid=this.route.snapshot.paramMap.get('test_id');
    this.service.getMcq(this.courseid,this.chapterid,this.testid,this.count).subscribe(res=>{
      console.log("The response is ")
      console.log(res["Question"]);
      this.question=res["Question"];
      this.answers=res["Answers"];
      this.startCountdown(this.sec);
    },error=>{
        console.log("You caught an error")
      });  
>>>>>>> 39aabe68088ade9659bea5f387711e681fd7ea07
  }

}
