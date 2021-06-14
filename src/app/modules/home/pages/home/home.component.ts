import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myTwitter:string;
  constructor() { }

  ngOnInit(): void {
    this.myTwitter = "https://twitter.com/Mo38530189";
  }

}
