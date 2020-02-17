import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-topiccomponent',
  templateUrl: './topiccomponent.component.html',
  styleUrls: ['./topiccomponent.component.css']
})

export class TopiccomponentComponent implements OnInit {

  url: string = "http://www.w3schools.com";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
