import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signForm: FormGroup;
  constructor(private signUpService: SignUpService,private router:Router) { }

  ngOnInit(): void {
    this.signForm = new FormGroup({

      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, ]),
      password: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      mobile: new FormControl("", [Validators.required,Validators.min(10)]),
      gender: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required)

    });
  }
    create(){
      console.log(this.signForm.value);
      this.signUpService.saveForm(this.signForm.value)
  
      .subscribe((res:any)=>{
        console.log(res);
        this.router.navigate(["list"]);
      })
    }
  }

