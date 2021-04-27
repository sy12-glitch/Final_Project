import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLoginComponent } from './admin-login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule,  HttpClientTestingModule ],
      declarations: [ AdminLoginComponent ],
      providers: [],
     
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-Check]- Should check admin email address is invalid', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('admin');

    expect(email.errors['email']).toBeTruthy();
  });
  it('[Email-Check] - should check admin correct email address is entered',()=>{
    let email = component.loginForm.controls['email'];
    email.setValue('@gmail.com');
    expect(email.errors).toBeNull();
  });

  // it('[Password-Check]- should check password',()=>{
  //   let pwd = component.loginForm.controls['password'];
  //   expect(pwd.errors['required']).toBeTruthy();
  //   pwd.setValue('admin');
  //   expect(pwd.errors['minlength']).toBeTruthy();
  // });
  it('[Password-Check]- should check password validity',()=>{
    let pwd = component.loginForm.controls['password'];
    pwd.setValue('ad');
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });
  it('[Form-Check]- should check form is valid or not if no value entered',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[Form-Check]- should check form is valid or not when value entered',()=>{
    component.loginForm.controls['email'].setValue('admin@gmail.com');
    component.loginForm.controls['password'].setValue('Admin@123');
    expect(component.loginForm.valid).toBeTruthy();
  });
  // it('[Form-Check]- should check form is submited',()=>{
  //   expect(component.loginForm.invalid).toBeTruthy();
  //   let btn = fixture.debugElement.query(By.css('input[type=submit]'));
  //   expect(btn.nativeElement.disabled).toBeTruthy();

  //   component.loginForm.controls['email'].setValue('admin@gmail.com');
  //   component.loginForm.controls['password'].setValue('Admin@123');
  //   fixture.detectChanges();
  //   expect(btn.nativeElement.disabled).toBeTruthy();

  //   component.login();
  //   fixture.detectChanges();

  //   let successDiv = fixture.debugElement.query(By.css("#msg")).nativeElement.innerText;
  //   expect(successDiv).toBe('login success !');

  // });
});
