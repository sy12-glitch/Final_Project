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
  
    // login() : void {
      
    //   console.log(this.loginForm.value);
    //   this.customService.login(this.loginForm)
    //   .subscribe((res:any)=>{
    //     console.log(res);
    //     this.router.navigate(["/home"]);
    //     alert("success");
    //   })}
    login() : void {
      
      console.log(this.loginForm.value);
      this.customService.saveForm(this.loginForm.value)
      .subscribe((res:any)=>{
        //console.log(res);
        this.router.navigate(["/"]);
      })
  }
}