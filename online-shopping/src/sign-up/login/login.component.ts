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
        email:new FormControl("",Validators.required),
        password :new FormControl("",Validators.required)
      });
    }
    

    login() : void {
      if(this.username == 'admin@gmail.com' && this.password == 'Admin@123'){
        this.msg="Bad credential, enter right email-id or passoword !";
      }else{
      // console.log(this.loginForm.value);
        this.customService.saveForm(this.loginForm.value)
        .subscribe(
          (data:User) =>{
          console.log("login successful");
            this.customService.userdata=data;
            localStorage.setItem('userlogindetails', JSON.stringify(data));
            console.log( this.customService.userdata);
          this.msg="Login success !";
          this.router.navigate(["/home-page"]);
        },
        error=>{
          console.log("exception occured");
          this.msg="Bad credential, enter right email-id or passoword !";
        }
        
        
        )
    }}
}   
  