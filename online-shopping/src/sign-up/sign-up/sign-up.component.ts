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
  constructor(private signUpService: SignUpService,private router:Router) { }

  ngOnInit(): void {
    this.signForm = new FormGroup({
      first_name:new FormControl("",[Validators.required,Validators.minLength(3)]),
      last_name: new FormControl("", [Validators.required,Validators.minLength(3)]),// Validators.pattern('^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ]),
      password: new FormControl("", [Validators.required,Validators.minLength(6)]),//Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,10}$')]),
      address: new FormControl("", [Validators.required, ]),//Validators.pattern('(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}')]),
      mobile: new FormControl("", [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10)]),//Validators.pattern('^[0][1-9]\d{9}$|^[1-9]\d{9}$')]),
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

// export class SignUpComponent {
//   title = 'angularpopup';
//   showModal: boolean;
//   registerForm: FormGroup;
//   submitted = false;
//   constructor(private formBuilder: FormBuilder) { }
//   show()
//   {
//     this.showModal = true; // Show-Hide Modal Check
    
//   }
//   //Bootstrap Modal Close event
//   hide()
//   {
//     this.showModal = false;
//   }
//   ngOnInit() {
//     this.registerForm = this.formBuilder.group({
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         firstname: ['', [Validators.required, Validators.minLength(6)]],
//         mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
//     });
// }
// // convenience getter for easy access to form fields
// get f() { return this.registerForm.controls; }
// onSubmit() {
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }
//     if(this.submitted)
//     {
//       this.showModal = false;
//     }
   
// }
  
// }