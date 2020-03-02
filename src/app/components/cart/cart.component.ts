import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  response:any;
  isAvailable:any;

  constructor(private service:DataServiceService,private router:Router,private spinner:NgxSpinnerService) { }

  remove(course_id:any){
    this.spinner.show();
    this.service.removeFromCart(course_id).subscribe(res=>{
      this.ngOnInit();
      this.spinner.hide();
    },error=>{
      console.log(error);
      this.spinner.hide();
    })
  }

  checkout(course_id:any){
    this.spinner.show();
    console.log("Checkout Button is clicked");
    this.service.checkOut(course_id).subscribe(res=>{
      this.router.navigate(['registeredCourses']);
      this.spinner.hide();
    },error=>{
      this.spinner.hide();
    });
    
  }

  ngOnInit() {
    this.spinner.show();
    this.service.getCartComponent().subscribe(res=>{
      this.response=res["cart_items"];
      if(this.response.length==0)
      {
        this.isAvailable=false;
      }else{
        this.isAvailable=true;
      }
      this.spinner.hide();
    },error=>{
      console.log(error);
      this.spinner.hide();
    })
  }

}
