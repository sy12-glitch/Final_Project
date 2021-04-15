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

  constructor(private router: Router, 
    private http: HttpClient, private customService:CustomerService) { }

  loginForm: FormGroup;
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        username:new FormControl("",Validators.required),
        password :new FormControl("",Validators.required)
      });
    }
  
    login() : void {
      
      console.log(this.loginForm.value);
      this.customService.saveForm(this.loginForm.value)
      .subscribe((res:any)=>{
        console.log(res);
        this.router.navigate(["home"]);
      })
    }
  }
    