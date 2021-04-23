import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/Services/userdetails.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
 
    images = [1,2,3].map(() => `https://visitclearwaterflorida.com/wp-content/uploads/2017/05/women-shopping.jpg`);
    

  constructor(private userdetailsservice:UserdetailsService) { }

  ngOnInit(): void {
  }

logout(){
  let userstring=localStorage.getItem('userlogindetails');
  const userlogin = JSON.parse(userstring);
  this.userdetailsservice.logoutUser(userlogin)
  // sessionStorage.setItem('cart', JSON.stringify(this.cartProducts));
  .subscribe(
    data =>{
    console.log("logged out");
      console.log(data);
     if(data==true){
       localStorage.removeItem('userlogindetails');
       let userstring1=localStorage.getItem('userlogindetails');
       const userlogin1 = JSON.parse(userstring1);
       console.log(userlogin1);
     }
    
  },
  error=>{
    console.log("exception occured");
    //this.msg="Bad credential, enter right email-id or passoword !";
  })
}

}
