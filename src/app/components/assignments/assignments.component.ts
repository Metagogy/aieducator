import { Component, OnInit, wtfStartTimeRange, AfterViewInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TestandtopicService} from 'src/app/services/testandtopic.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient,private service:TestandtopicService) {
      route.params.subscribe(()=>{
        this.ngOnInit();
      })
   }

  id:any;
  problem:any;
  hints:any;
  level:number;
  prblm_id:string;
  question:string;
  referes:any;
  eg_input:any;
  eg_output:any;
  sec:any=900;
  text:string="";

  run(){
    //post the code to backened foe running the test cases

    console.log(this.text);
  }

  startCountdown(seconds:number){
    var counter = seconds;
    var interval = setInterval(() => {
      this.sec=counter;
      counter--;
      if(counter < 0 ){
        // The code here will run when
        // the timer has reached zero.
        this.sec="Finished";
        clearInterval(interval);
        console.log('Ding!');
      };
    }, 1000);
  }

  runAndSave(){
    this.service.saveAssignment(this.id, this.text).subscribe(res=>{
      alert("Code saved")
    })

  }

  

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('assign_id');
      this.service.getAssignment(this.id).subscribe(res=>{
      console.log(res)
      this.problem=res["data"];
      this.level=this.problem["level"];
      this.prblm_id=this.problem["pblm_id"];
      this.question=this.problem["question"];
      this.hints=JSON.parse(this.problem["hints"]);
      this.referes=this.problem["subtags"];
      this.eg_input=this.problem["eg_input"];
      this.eg_output=this.problem["eg_output"];
      this.text = res["record"]
      this.startCountdown(this.sec);      
    },error=>{
      console.log(error);
    });
  }
}
