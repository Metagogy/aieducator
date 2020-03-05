import { Component, OnInit } from '@angular/core';
import {TestandtopicService} from '../../services/testandtopic.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router,ActivatedRoute} from '@angular/router';
import { InteractionserviceService } from 'src/app/services/interactionservice.service';
import { DataServiceService } from 'src/app/data-service.service';

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
  cat:any;
  responseCopy:any;
  topics:any;


  constructor(private interactionService:InteractionserviceService,private service:TestandtopicService,private dataService:DataServiceService,private spinner:NgxSpinnerService,private route:ActivatedRoute,private router:Router) { }

  changeType(chapterno:any,type:any,typeFrom:string,chapter_index:number,index:number)
  {


      if(typeFrom=="assignment")
      {
        this.interactionService.saveAssignDetails(chapter_index,index);
        // console.log("The send to assignment method is called");
        this.typeOf="assignment";
        this.chapterNo=chapterno;
        this.sl_no=type;
        this.router.navigate(['assign',this.sl_no],{relativeTo:this.route});
      }

      else if(typeFrom=='topic')
      {
        // this.interactionService.sendTopic(chapter_index,index);
        this.responseCopy=this.dataService.getSyllabusFromLocalStorage(this.id);

        // console.log("The response copy is ",this.responseCopy[chapter_index]['topic'][index]['is_read']);
        if(this.responseCopy[chapter_index]['topic'][index]['is_read']==false)
        {
          this.responseCopy[chapter_index]['topic'][index]['is_read']=true;
          this.dataService.setSyllabusInLocalStorage(JSON.stringify(this.responseCopy),this.id);
          this.chapters=this.responseCopy;
          // this.topics=this.responseCopy['topic'];
          // console.log("The topic read is made true");
        }

        this.typeOf="topic";
        this.chapterNo=chapterno;
        this.sl_no=type;
        this.router.navigate([this.cat,this.chapterNo,this.sl_no],{relativeTo:this.route});
      }

      else if(typeFrom=='test')
      {
        this.interactionService.saveTestDetails(chapter_index,index);
        this.typeOf="test";
        this.chapterNo=chapterno;
        this.sl_no=type;
        this.router.navigate(['MCQ',this.chapterNo,this.sl_no],{relativeTo:this.route});
      }
  }


  // trackTopic(index,topic)
  // { 
  //   // console.log("The tracked one is ",index,topic);
  //   // return topic.is_read;
  //   // console.log("The trackTopic function is called in test and topic component ",topic,"index is ",index);
  // }


  ngOnInit() {
    console.log("In test and topic component");
    this.interactionService.responseCopy$.subscribe(res=>{
      // console.log("updating chapters");
      this.chapters=res;
      // console.log("The response is updated ",res);
    })

    this.id = this.route.snapshot.paramMap.get('id');
    this.spinner.show();
    this.response=this.service.getSyllabusFromBackend(this.id).subscribe(res=>{
  
        this.response=res['data'];
        this.cat=res["cat"];

        if(localStorage.getItem('syllabus')==null)
        {
          this.dataService.setSyllabusInLocalStorage(JSON.stringify(this.response),this.id);
        }

        this.chapters=this.response;
        this.spinner.hide();

    },error=>{
        this.spinner.hide();
      });
  }
}
