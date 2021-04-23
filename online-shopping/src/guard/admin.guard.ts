import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdetailsService } from 'src/Services/userdetails.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  router: any;
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.UserdetailsService.user.role == 'admin'){
        return true;
      } else {
        this.router.navigate(['add-product']);
      }
  }
  
}