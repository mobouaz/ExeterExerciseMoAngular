import { Component, Input, OnInit } from '@angular/core';
import { Dealer } from '../../models/dealer/dealer';

@Component({
  selector: 'app-dealer-card',
  templateUrl: './dealer-card.component.html',
  styleUrls: ['./dealer-card.component.css']
})
export class DealerCardComponent implements OnInit {
@Input() dealer: Dealer;
  constructor() { }

  ngOnInit(): void {

  }

}

@Component({ selector: 'app-dealer-card', template: '' })
export class DealerCardCtubComponent implements Partial<DealerCardComponent> {
  @Input() dealer: Dealer;
}
