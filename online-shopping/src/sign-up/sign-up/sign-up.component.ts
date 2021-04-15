import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signForm: FormGroup;
  constructor(private signUpService: SignUpService,private router:Router, private http: HttpClient) { }
  msg = "";

  ngOnInit(): void {
    this.signForm = new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.minLength(3)]),
      lname: new FormControl("", [Validators.required,Validators.minLength(3)]),// Validators.pattern('^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ]),
      password: new FormControl("", [Validators.required,Validators.minLength(6)]),//Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,10}$')]),
      address: new FormControl("", [Validators.required, ]),//Validators.pattern('(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}')]),
      mobile: new FormControl("", [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10)]),//Validators.pattern('^[0][1-9]\d{9}$|^[1-9]\d{9}$')]),
      gender: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
    });
  }
    create(){
      console.log(this.signForm.value);
      this.signUpService.saveForm(this.signForm.value)
  
      .subscribe(
        data=>{
        console.log("login successful");
        alert("sign-up successful");
        this.router.navigate(["/login"]);

        error=>{
          console.log("error occured")
          this.msg="Bad credential, enter right email or passoword";
        }
      })
    }
  }

