<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, wtfStartTimeRange, AfterViewInit } from '@angular/core';
>>>>>>> 39aabe68088ade9659bea5f387711e681fd7ea07
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TestandtopicService} from 'src/app/services/testandtopic.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

<<<<<<< HEAD
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient,private service:TestandtopicService) { }

  id:any;
  
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('assign_id');
    console.log(this.id);
    this.service.getAssignment(this.id).subscribe(res=>{
      console.log(res);
    },error=>{
      console.log(error);
    });
    
  }

=======
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
      console.log(counter);
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
    //post the code and get the response from backend
    console.log(this.text);
  }

  

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('assign_id');
      this.service.getAssignment(this.id).subscribe(res=>{
      this.problem=res["data"];
      this.level=this.problem["level"];
      this.prblm_id=this.problem["pblm_id"];
      this.question=this.problem["instructions"];
      this.hints=JSON.parse(this.problem["hints"]);
      this.referes=this.problem["subtags"];
      this.eg_input=this.problem["eg_input"];
      this.eg_output=this.problem["eg_output"];
      this.startCountdown(this.sec);      
    },error=>{
      console.log(error);
    });
  }
>>>>>>> 39aabe68088ade9659bea5f387711e681fd7ea07
}
