import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  msg: string;
    ngOnInit() {
    }
  
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["user"]);
       alert("login successful");
       this.router.navigate(["/"]);
      }else {
        this.msg="Bad credential, enter right email-id or passoword !";
      }
    }
    }
  