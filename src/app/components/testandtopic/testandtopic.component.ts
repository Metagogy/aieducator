import { Component, OnInit } from '@angular/core';
import {TestandtopicService} from '../../services/testandtopic.service';
import {NgxSpinnerService} from 'ngx-spinner';

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

  constructor(private service:TestandtopicService,private spinner: NgxSpinnerService) { }

  changeType(chapterno:any,type:any,typeFrom:string)
  {
      if(typeFrom=="assignment")
      {
        this.typeOf="assignment";
        this.chapterNo=chapterno;
        this.sl_no=type;
      }
      else if(typeFrom=='topic')
      {
        this.typeOf="topic";
        this.chapterNo=chapterno;
        this.sl_no=type;
      }
      else if(typeFrom=='test')
      {
        this.typeOf="test";
        this.chapterNo=chapterno;
        this.sl_no=type;
      }
      console.log(this.url+this.chapterNo+"/"+this.sl_no);
      console.log(this.typeOf);
  }

  ngOnInit() {
    this.spinner.show();
    this.url="https://ibastatic.sfo2.digitaloceanspaces.com/";
    this.response=this.service.getSyllabusFromBackend().subscribe(res=>{

        this.response=res['data'];
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
