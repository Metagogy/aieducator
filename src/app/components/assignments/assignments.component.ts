import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TestandtopicService } from 'src/app/services/testandtopic.service';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})


export class AssignmentsComponent implements OnInit {

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private service: TestandtopicService) {
    route.params.subscribe(() => {
      this.initCopy();
    })
  }

  id: any;
  problem: any;
  hints: any;
  level: number;
  prblm_id: string;
  question: string;
  referes: any;
  eg_input: any;
  eg_output: any;
  sec: any = 900;
  text: string = "";
  runResponse: any;
  isRunnig: boolean;
  options: any;
  reg_course_id:any;

  run() {
    this.service.runTestCases(this.text, this.id, this.countdown.i.value / 1000,this.reg_course_id).subscribe(res => {
      console.log("The response caught after runnning testcases is ",res);
      this.runResponse = res["testcases"];
      this.isRunnig = true;
    }, error => {
      console.log("You caught an error in running assignment")
    });
  }


  Save() {
    //post the code and get the response from backend
    this.service.saveAssignment(this.id, this.text).subscribe(res => {
      console.log(res);
      alert("Code saved")
    }, error => {
      console.log("You have caught an error");
    })
    console.log(this.text);
  }


  initCopy() {
    this.isRunnig = false;
    this.id = this.route.snapshot.paramMap.get('assign_id');
    this.service.getAssignment(this.id).subscribe(res => {
      this.reg_course_id=res["reg_course_id"];
      this.countdown.restart();
      this.countdown.begin();
      this.problem = res["data"];
      this.text = res["record"];
      this.level = this.problem["level"];
      this.prblm_id = this.problem["pblm_id"];
      this.question = this.problem["instructions"];
      this.hints = JSON.parse(this.problem["hints"]);
      this.referes = this.problem["subtags"];
      this.eg_input = this.problem["eg_input"];
      this.eg_output = this.problem["eg_output"];  
    }, error => {
      console.log(error);
    });
  }


  ngOnInit() {

  }
}
