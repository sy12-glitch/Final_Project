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
      // console.log(this.loginForm.value);
      this.adminService.saveForm(this.loginForm)
      .subscribe(
        data =>{
        console.log("login successful");
        alert("login successful");
        this.router.navigate(["/controller"]);
      },
      error=>{
        console.log("exception occured");
        this.msg="Bad credential, enter right email-id or passoword !";
      }
      
      
      )
  }
}   
  
