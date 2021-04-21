import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User.Model';
import { UserdetailsService } from 'src/Services/userdetails.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users:User[]=[];
    
    
    constructor(private router: Router, 
      private http: HttpClient,private userdetailsService:UserdetailsService) { }
  
    ngOnInit(): void {
      this.getAllUsers();
    }
  
    getAllUsers(){
      this.userdetailsService.getAllUsers()
      .subscribe((res:any)=>{
        console.log(res);
        this.users = res;
      })
    }

    deleteUser(home){
      this.userdetailsService.deleteUser(home.userid)
      .subscribe((res:any)=>{
        this.getAllUsers();
      })
    }
  }
