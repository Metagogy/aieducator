import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("On destroy method called");
  }

  show: boolean;
  chats: any;
  msg: string;
  now: any;
  userDetails: any;
  userName: any;
  userId: any;
  group_id: any
  courseId: any;
  showNew:boolean;


  constructor(private service: DataServiceService, private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.courseId = this.route.parent.snapshot.paramMap.get('id');
    this.userId = localStorage.getItem('user_id');
    this.userName = localStorage.getItem('user_Name');
    // console.log("The course id is ", this.courseId);
    // console.log("Chat onInit method is called");
    if (localStorage.getItem('group_id') == undefined || localStorage.getItem('group_id') == 'null') {
      this.service.getGroupId(this.courseId).subscribe(res => {
        // console.log(res);
        this.group_id = res["dict_data"]["course_group_id"];
        localStorage.setItem('group_id', this.group_id)
        console.log("The group id in getGroupId method is ", this.group_id);
        // this.chats=this.service.getUSerDetails();
        this.db.list('/chats/' + this.group_id).valueChanges().subscribe((data) => {
          this.chats = data;
          // console.log(this.chats);
          if(this.show || this.group_id==null)
          {
            this.showNew=false;
          }
          else{
            this.showNew=true;
          }
        })
      }, error => {
        console.log("You caught an error in chat  component oninit method ", error)
      })
    } else {
      this.group_id = localStorage.getItem('group_id');
      this.db.list('/chats/' + this.group_id).valueChanges().subscribe((data) => {
        this.chats = data;
        // console.log(this.chats);
        if(this.show || this.group_id==null)
        {
          this.showNew=false;
        }else{
          this.showNew=true;
        }
      })
    }    
  }

  open1() {
    if (this.group_id == null) {
      alert("The group chat is not available for you");
    } else {
      this.show = !this.show;
      this.showNew=false;
    }
    // console.log("open button is clicked");
  }

  onKeydown(event: any) {
    // console.log(event);
    this.sendMessage();
  }

  sendMessage() {
    // console.log("Send Button is clicked");
    this.db.list('/chats/' + this.group_id).push({ 'msg': this.msg, 'name': this.userName, 'userId': this.userId });
    this.msg = "";
  }

}
