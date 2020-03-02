import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataServiceService } from 'src/app/data-service.service';

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

  constructor(private service: DataServiceService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) {
    route.params.subscribe(() => {
      this.initDuplicate();
    })
  }

  initDuplicate() {
    this.id = this.route.parent.snapshot.paramMap.get('id');
    this.cat = this.route.snapshot.paramMap.get('cat');
    this.course_slno = this.route.snapshot.paramMap.get('chap_slno');
    this.topic_slno = this.route.snapshot.paramMap.get('topic_slno');
    this.url = this.url1 + this.cat + "/" + this.course_slno + "/" + this.topic_slno + ".html";
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.service.lastActivity(this.id,this.cat,this.course_slno,this.topic_slno).subscribe(res=>{
      // console.log("Last activity saved");
    },error=>{
      console.log(error);
    });

  }
  ngOnInit() {
  }
}
