import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TestandtopicService} from 'src/app/services/testandtopic.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

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

}
