import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import {AuthseviceService} from 'src/app/services/authsevice.service';
import {tap,catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import { InteractionserviceService } from '../services/interactionservice.service';
import { instances } from 'chart.js';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService:AuthseviceService,private router:Router,private service:InteractionserviceService){}

    intercept(req: HttpRequest<any>, next:HttpHandler){
        // throw new Error("Method not implemented.");

        if(this.authService.getTokens())
        {
            // console.log(this.authService.getTokens())
            // console.log("Interceptor called");
            req=this.addToken(req,this.authService.getTokens());
        }
        return next.handle(req).pipe(catchError((error)=>{
            // console.log("The error status in http error response is",error.status);
            if(error instanceof HttpErrorResponse)
            {
                if(error.status==401 || error.status==403)
                {
                    this.service.sendToParent(false);
                    localStorage.clear();
                    this.router.navigate(['unauthorized']);
                }else if(error.status>=500 && error.status<600)
                {
                    this.router.navigate(['internalServerError']);
                }else if(error.status==404)
                {
                    this.router.navigate(['pagenotFound']);
                }
            }
            return throwError(error);
        }));

    }

    addToken(req:HttpRequest<any>,token:string){
        return req.clone(
            {
                setHeaders:{
                    'Authorization':'Token '+token
                }
            }
        )
    }
}
