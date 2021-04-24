import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdetailsService } from 'src/Services/userdetails.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  router: any;
  private userdetailsService:UserdetailsService;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this. userdetailsService.user.isValid){
        return true;
      } else {
        this.router.navigate(['home-page']);
      }
  }
  
}
