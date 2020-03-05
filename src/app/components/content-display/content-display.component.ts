import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import {ActivatedRoute,Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { InteractionserviceService } from 'src/app/services/interactionservice.service';


@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {

  constructor(private interactionService:InteractionserviceService,private service:DataServiceService,private route:ActivatedRoute,private router:Router,private spinner:NgxSpinnerService) { }
  id:any;
  content:any;
  data:any;
  chapters:any;
  topics:any;
  content_name:any;
  cat:any;
  course_id:any;
  userName:any;
  what:any;
  why:any;
  user:any;
  responseCopy:any;


  onChapterSelected(chapter_sl_no:any,topic_sl_no:any,chapter_index:number,topic_index:number){
    console.log("In onChapterSelected of content display component is ");
    console.log("The chapter index is ",chapter_index);
    console.log("The topic index is ",topic_index);
    // this.interactionService.send Topic(chapter_index,topic_index);


    this.router.navigate(['testandtopic',this.course_id,this.cat,chapter_sl_no,topic_sl_no]);
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('reg_course_id');
    // console.log("The registered course id is ",this.id);
    this.spinner.show();

    this.service.getContentDisplay(this.id).subscribe(res=>{
      console.log("The response in content display is ",res);
      this.content=JSON.parse(res["big_circles"]);
      this.data=res["data"];
      this.chapters=this.data;
      this.content_name=this.content["name"];
      this.cat=this.content["cat"];
      this.course_id=this.content["courseid"];
      this.userName=this.content["name"];
      this.what=this.content["what"];
      this.why=this.content["why"];
      this.user=this.content["user"];
      // console.log("The response is");
      // console.log(this.content);
      // console.log(res);
      this.spinner.hide();
    },error=>{
      // console.log("You got an error while getting the content display");
      console.log(error);
      this.spinner.hide();
    });
  }
}
