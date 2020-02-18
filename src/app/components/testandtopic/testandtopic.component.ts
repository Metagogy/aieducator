import { Component, OnInit } from '@angular/core';
import {TestandtopicService} from '../../services/testandtopic.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-testandtopic',
  templateUrl: './testandtopic.component.html',
  styleUrls: ['./testandtopic.component.css']
})

export class TestandtopicComponent implements OnInit {
  
  chapters:any;
  titleSrc:any;
  response:any;
  typeOf:string;
  sl_no:any;
  chapterNo:any;
  url:any;
  errorStatus:boolean;
  errorMessage:any;
  id:any;
  count:number=0;

  constructor(private service:TestandtopicService,private spinner:NgxSpinnerService,private route:ActivatedRoute,private router:Router) { }

  changeType(chapterno:any,type:any,typeFrom:string)
  {
      if(typeFrom=="assignment")
      {
        this.typeOf="assignment";
        console.log(this.typeOf);
        this.chapterNo=chapterno;
        this.sl_no=type;
        this.router.navigate(['assign',this.sl_no],{relativeTo:this.route});        
      }
      else if(typeFrom=='topic')
      {
        this.typeOf="topic";
        this.chapterNo=chapterno;
        this.sl_no=type;
        this.router.navigate(['topic'],{relativeTo:this.route});
      }
      else if(typeFrom=='test')
      {
        this.typeOf="test";
        this.chapterNo=chapterno;
        this.sl_no=type;
        console.log(this.chapterNo);
        console.log(this.sl_no);
        this.router.navigate(['MCQ',this.chapterNo,this.sl_no],{relativeTo:this.route});
      }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.response=this.service.getSyllabusFromBackend(this.id).subscribe(res=>{
        this.response=res['data'];
        // console.log(res);
        if(localStorage.getItem('syllabus')==null)
        {
          localStorage.setItem("syllabus",this.response);
          console.log("Syllabus is stored in localstorage");
        }
        this.chapters=this.response;
        console.log(this.chapters);
        this.spinner.hide();
    },error=>{
        console.log("An error as occured while fetching syllabus");
        this.spinner.hide();
      });
  }
}
