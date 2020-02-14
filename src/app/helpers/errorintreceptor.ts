import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {AuthseviceService} from 'src/app/services/authsevice.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService:AuthseviceService){}

    intercept(req: HttpRequest<any>, next:HttpHandler){
        // throw new Error("Method not implemented.");

        if(this.authService.getTokens())
        {
            console.log("Adding tokens")
            req=this.addToken(req,this.authService.getTokens());
        }
        return next.handle(req);

    }

    addToken(req:HttpRequest<any>,token:string){
        return req.clone(
            {
                setHeaders:{
                    'Authorization':token
                }
            }
        )
    }
}
