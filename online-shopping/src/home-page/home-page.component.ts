import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  images = [1,2,3].map(() => `https://visitclearwaterflorida.com/wp-content/uploads/2017/05/women-shopping.jpg`);
  


  constructor() { }

  ngOnInit(): void {
  }
}