  
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userlogin = localStorage.getItem('userlogindetails')
  isLoggedIn:boolean = this.userlogin != null ? true:false;

  constructor() { }

  ngOnInit(): void {
    //let userstring = localStorage.getItem('userlogindetails');
    //const userlogin = JSON.parse(userstring);
    
   

}
}