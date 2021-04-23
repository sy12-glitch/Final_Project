import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { User} from 'src/Models/User.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  msg: string;

  constructor(private router: Router, 
    private http: HttpClient, private customService:CustomerService) { }
    
    user:User;

    userDetails={}
  loginForm: FormGroup;

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email:new FormControl("demo@gmail.com",Validators.required),
        password :new FormControl("Demo@123",Validators.required)
      });
    }
  
    login() : void {
      // console.log(this.loginForm.value);
        this.customService.saveForm(this.loginForm.value)
        .subscribe(
          (data:User) =>{
          console.log("login successful");
           // console.log(data);
            this.customService.userdata=data;
            localStorage.setItem('userlogindetails', JSON.stringify(data));
            console.log( this.customService.userdata);
          alert("login successful");
          this.router.navigate(["/order"]);
        },
        error=>{
          console.log("exception occured");
          this.msg="Bad credential, enter right email-id or passoword !";
        }
        
        
        )
    }
}   
  