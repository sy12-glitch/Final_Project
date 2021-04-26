import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLoginComponent } from './admin-login.component';
import {} from '../../app.routing';
describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginComponent ]
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
    email.setValue('admin@gmail.com');
    expect(email.errors).toBeNull();
  });

  it('[Password-Check]- should check password',()=>{
    let pwd = component.loginForm.controls['password'];
    expect(pwd.errors['required']).toBeTruthy();
    pwd.setValue('admin');
    expect(pwd.errors['minlenght']).toBeTruthy();
  });
  it('[Password-Check]- should check password validity',()=>{
    let pwd = component.loginForm.controls['password'];
    pwd.setValue('Admin@123');
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

});
