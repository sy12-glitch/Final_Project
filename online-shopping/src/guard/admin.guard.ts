import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
  
      let adminstring=localStorage.getItem('adminlogindetails');
      const adminlogin = JSON.parse(adminstring);
      
      if(adminlogin!= null && adminlogin.role=="Admin"){
        
        return true;
      } else {
        this.router.navigate(['home-page']);
        return false;
       
      }
  }
  
}