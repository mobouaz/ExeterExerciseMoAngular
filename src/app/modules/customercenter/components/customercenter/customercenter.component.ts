import { Component, OnInit } from '@angular/core';
import { CustomercenterService } from 'src/app/modules/customercenter/customercenter.service';
import { CustomerCenterSectionesponse, CustomerCenterSectionesponses } from '../../models/customercentersectionresponse';

@Component({
  selector: 'app-customercenter',
  templateUrl: './customercenter.component.html',
  styleUrls: ['./customercenter.component.css']
})
export class CustomercenterComponent implements OnInit {

  response: CustomerCenterSectionesponses;
  constructor(private customerCenterService: CustomercenterService) { }

  ngOnInit(): void {
    this.customerCenterService.get<CustomerCenterSectionesponses>().subscribe(result => {
      this.response = result;
    }, error => console.error(error));
  }

}
