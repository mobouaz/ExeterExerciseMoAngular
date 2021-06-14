import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../dealer.service'
import { Dealer } from '../../models/dealer/dealer';
import { DealerResponse } from '../../models/dealer/dealerresponse';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  dealers: Dealer[];
  constructor(private dealerService: DealerService) { }

  ngOnInit(): void {
    this.dealerService.get().subscribe(result => {
      this.dealers = result;
    }, error => console.error(error));
  }

}

@Component({ selector: 'app-dealer-card', template: '' })
class DealertubComponent implements Partial<DealerComponent> {
  dealers: Dealer[];
}
