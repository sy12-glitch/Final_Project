import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User.Model';
import { UserdetailsService } from 'src/Services/userdetails.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  router: any;
  private userdetailsService:UserdetailsService;
  role: any;
  user: any;
  userstring: any;
  userlogin: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      let userstring=localStorage.getItem('userlogindetails');
      const userlogin = JSON.parse(userstring);
      
      
      if(this.userlogin!= null){
        
        return true;
      } else {
        this.router.navigate(['home-page']);
        return false;
       
      }
  }
  
}

