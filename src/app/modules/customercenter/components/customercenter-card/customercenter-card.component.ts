import { Component, Input, OnInit } from '@angular/core';
import { CustomerCenterSectionesponse } from '../../models/customercentersectionresponse';

@Component({
  selector: 'app-customercenter-card',
  templateUrl: './customercenter-card.component.html',
  styleUrls: ['./customercenter-card.component.css']
})
export class CustomercenterCardComponent implements OnInit {

  @Input() customercentersection : CustomerCenterSectionesponse
  constructor() { }

  ngOnInit(): void {
    var temp = this.customercentersection;
  }

}
