import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthseviceService } from '../services/authsevice.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OppguardGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private AuthService:AuthseviceService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log("can Activate method of a oppGuard is called");
      if(!this.AuthService.isUserLoggedIn())
      {
        return true;
      }
      this.router.navigate(['dashboard']);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
