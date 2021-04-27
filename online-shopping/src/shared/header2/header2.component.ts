import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    let adminstring = localStorage.getItem('adminlogindetails');
    const adminlogin = JSON.parse(adminstring);
    this.adminService.logoutAdmin(adminlogin)
      .subscribe(
        data => {
          console.log("logged out");
          console.log(data);
          if (data == true) {
            localStorage.removeItem('adminlogindetails');
            let userstring1 = localStorage.getItem('adminlogindetails');
            const userlogin1 = JSON.parse(userstring1);
            console.log(userlogin1);
            this.router.navigate([""]);
          }
        },
        error => {
          console.log("exception occured");
        })
  }
}

