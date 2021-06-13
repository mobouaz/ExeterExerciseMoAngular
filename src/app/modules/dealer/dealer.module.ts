import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerRoutingModule } from './dealer-routing.module';
import { DealerComponent } from './components/dealer/dealer.component';
import { DealerCardComponent } from './components/dealer-card/dealer-card.component';




@NgModule({
  declarations: [DealerComponent, DealerCardComponent],
  imports: [
    CommonModule,
    DealerRoutingModule
  ]
})
export class DealerModule { }
