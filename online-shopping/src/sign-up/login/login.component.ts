import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email = true;
password = true;
msg="";
  constructor(private router: Router, 
    private http: HttpClient, private customService:CustomerService) { }
  
    userDetails={}
  loginForm: FormGroup;

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email:new FormControl("",Validators.required),
        password :new FormControl("",Validators.required)
      });
    }
  
 
    login() : void {
      
      console.log(this.loginForm.value);
      this.customService.saveForm(this.loginForm)
      .subscribe(
        data =>{
        console.log("Resived");
        this.router.navigate(["home"]);
      },
      error=>{
        console.log("exception occured");
        this.msg="Bad credential, enter right email or passoword";
      }
      
      
      )
  }
}   
// login() : void {
      
  //   console.log(this.loginForm.value);
  //   this.customService.login(this.loginForm)
  //   .subscribe((res:any)=>{
  //     console.log(res);
  //     this.router.navigate(["/home"]);
  //     alert("success");
  //   })}