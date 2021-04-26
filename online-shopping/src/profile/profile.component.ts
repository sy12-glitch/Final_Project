import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User.Model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  fname: String;
  lname: String;
  email: String;
  mobile: Number;
  address: String;
  role: String;
  gender: String;

  constructor() { }

  ngOnInit(): void {
    this.displayUser();
  }
  displayUser() {
    let userstring = localStorage.getItem('userlogindetails');
    var userlogin = JSON.parse(userstring);
    this.user = userlogin;
    this.fname = userlogin.fname;
    this.lname = userlogin.lname;
    this.email = userlogin.email;
    this.mobile = userlogin.mobile;
    this.address = userlogin.address;
    this.role = userlogin.role;
    this.gender = userlogin.gender;
  }
}
