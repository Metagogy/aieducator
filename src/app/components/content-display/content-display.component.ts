import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import {ActivatedRoute,Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {

  constructor(private service:DataServiceService,private route:ActivatedRoute,private router:Router,private spinner:NgxSpinnerService) { }
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

  onChapterSelected(chapter_sl_no:any,topic_sl_no:any){
    // console.log("The chapter number is ",chapter_sl_no);
    // console.log("The topic sl_no is",topic_sl_no);
    // console.log("The courseId is ",this.course_id);
    // console.log("The catogery is ",this.cat);
    // this.service.getTopic(chapter_sl_no,topic_sl_no,this.cat);
    this.router.navigate(['testandtopic',this.course_id,this.cat,chapter_sl_no,topic_sl_no]);
  }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('reg_course_id');
    // console.log("The registered course id is ",this.id);
    this.spinner.show();
    this.service.getContentDisplay(this.id).subscribe(res=>{
      this.content=JSON.parse(res["big_circles"]);
      this.data=res["data"];
      this.chapters=this.data;
      this.content_name=this.content["name"];
      this.cat=this.content["cat"];
      this.course_id=res["content"].course;
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
