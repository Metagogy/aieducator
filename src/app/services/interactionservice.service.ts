import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionserviceService {

  private _loginStatus=new Subject<boolean>();
  loginStatus$=this._loginStatus.asObservable();

  constructor() { }

  sendToParent(msg:boolean)
  {
    // console.log("Send to parent method is called");
    this._loginStatus.next(msg); 
  }

}
