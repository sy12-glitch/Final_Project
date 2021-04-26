import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdetailsService } from 'src/Services/userdetails.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  adminService: any;
  constructor(private UserdetailsService:UserdetailsService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userstring=localStorage.getItem('adminlogindetails');
       const adminlogin = JSON.parse(userstring);
      
      if(adminlogin.role == 'Admin'){
        return true;
      } else {
        this.router.navigate(['home-page']);
      }
  }
  
}