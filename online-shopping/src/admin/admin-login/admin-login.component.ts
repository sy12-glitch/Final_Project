import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username: string;
  password: string;
  msg: string;
  customService: any;

  constructor(private router: Router, 
    private http: HttpClient, private adminService: AdminService) { }
  
    userDetails={}
  loginForm: FormGroup;

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email:new FormControl("admin@gmail.com",Validators.required),
        password :new FormControl("Admin@123",Validators.required)
      });
    }
  
 
    login() : void {
      if(this.username == 'admin@gmail.com' && this.password == 'Admin@123'){
  
      this.adminService.saveForm(this.loginForm.value)
      .subscribe(
        data =>{
        console.log("login successful");
        this.adminService.admindata=data;
        localStorage.setItem('adminlogindetails', JSON.stringify(data));
        console.log( this.adminService.admindata);
        alert("login successful");
        this.router.navigate(["/controller"]);
        this.msg="login success !";
      },
      error=>{
        console.log("exception occured");
        this.msg="Bad credential, enter right email-id or passoword !";
      }  
      ) 
    }else {
      this.msg="Bad credential, enter right email-id or passoword !";
  }
}
}   
  
