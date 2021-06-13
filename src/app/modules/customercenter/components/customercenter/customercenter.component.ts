import { Component, OnInit } from '@angular/core';
import { CustomercenterService } from 'src/app/modules/customercenter/customercenter.service';
import { CustomerCenterSectionesponse } from '../../models/customercentersectionresponse';

@Component({
  selector: 'app-customercenter',
  templateUrl: './customercenter.component.html',
  styleUrls: ['./customercenter.component.css']
})
export class CustomercenterComponent implements OnInit {

  response: CustomerCenterSectionesponse[];
  constructor(private customerCenterService: CustomercenterService) { }

  ngOnInit(): void {
    this.customerCenterService.get<any>().subscribe(result => {
      this.response = result;
      // var f = this.customerCenterSectionResponse. =result.customerCenterSections;
    }, error => console.error(error));
  }

}
