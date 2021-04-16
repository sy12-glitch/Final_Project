import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [1,2,3].map(() => `https://visitclearwaterflorida.com/wp-content/uploads/2017/05/women-shopping.jpg`);
  
cname:['clothing','shoe', 'accessories'];

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
category(){
  const url ="http://localhost:8080/home/addProduct"
  // const url ="http://localhost:8080/category/add"
  this.http.post(url,{
    cname:this.cname.values
    
  }).subscribe((data:any)=>{
        console.log(data)
    },
    error=>{
      console.log("error")
    }
  )
}
}
// category(){
//   const url ="http://localhost:8080/category/add"
//   this.http.post(url,{
//     cname:this.cname
    
//   }).toPromise().then((data:any)=>{
//     console.log(data)
//   })
// }
// }
