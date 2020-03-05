import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataServiceService } from 'src/app/data-service.service';
import { InteractionserviceService } from 'src/app/services/interactionservice.service';

@Component({
  selector: 'app-topiccomponent',
  templateUrl: './topiccomponent.component.html',
  styleUrls: ['./topiccomponent.component.css']
})

export class TopiccomponentComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    // console.log("On Destroy method called");
    // this.subscriber.unsubscribe();
  }

  url1: string = "https://ibastatic.sfo2.digitaloceanspaces.com/";
  urlSafe: SafeResourceUrl;
  cat: any;
  id: any;
  course_slno: any;
  topic_slno: any;
  url: any;
  chapter_index: number = 0;
  topic_index: number = 0;
  responseCopy: any;

  constructor(private interactionService: InteractionserviceService, private service: DataServiceService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) {

    route.params.subscribe(() => {
      this.initDuplicate();
    })

  }

  initDuplicate() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.cat = this.route.snapshot.paramMap.get('cat');
    this.course_slno = this.route.snapshot.paramMap.get('chap_slno');
    this.topic_slno = this.route.snapshot.paramMap.get('topic_slno');
    this.chapter_index = Math.floor((this.course_slno / 100)) - 1;
    this.topic_index = Math.floor((this.topic_slno % 100) / 2);
    this.responseCopy=this.service.getSyllabusFromLocalStorage(this.id);
    
    // console.log("The response copy in topic component is ", this.responseCopy);
    // console.log("The chapter index in topic component is ",this.chapter_index);
    // console.log("The topic index in topic component is ",this.topic_index);
    // console.log("The status is ",this.responseCopy[this.chapter_index]['topic'][this.topic_index]['is_read']);

    // if(this.responseCopy[this.chapter_index]['topic'][this.topic_index]['is_read']==false)
    // {
    //   this.responseCopy[this.chapter_index]['topic'][this.topic_index]['is_read']=true;
    //   this.service.setSyllabusInLocalStorage(this.responseCopy,this.id);
    //   console.log("The topic is read");
    // }

    this.url = this.url1 + this.cat + "/" + this.course_slno + "/" + this.topic_slno + ".html";
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.service.lastActivity(this.id, this.cat, this.course_slno, this.topic_slno, this.chapter_index, this.topic_index).subscribe(res => {
        // this.interactionService.sendResonseCopy(this.responseCopy);
    }, error => {
      console.log(error);
    });

  }

  ngOnInit() {
   
  }
}
