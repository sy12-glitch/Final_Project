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
  username: string;
  password: string;

  constructor(private router: Router, 
    private http: HttpClient, private customService:CustomerService) { }

  loginForm: FormGroup;
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email:new FormControl("",Validators.required),
        password :new FormControl("",Validators.required)
      });
    }
  
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["home-page"]);
      }else {
        alert("Invalid credentials");
      }
    }
    }
  
