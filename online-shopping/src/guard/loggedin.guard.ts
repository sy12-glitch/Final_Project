import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
  constructor( private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
  
      let userstring=localStorage.getItem('userlogindetails');
      const userlogin = JSON.parse(userstring);
      
      if(userlogin== null){
        
        return true;
      } else {
        this.router.navigate(['home-page']);
        return false;
       
      }
  }
}
