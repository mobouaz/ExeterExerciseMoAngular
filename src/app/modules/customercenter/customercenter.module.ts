import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomercenterRoutingModule } from './customercenter-routing.module';
import { CustomercenterCardComponent } from './components/customercenter-card/customercenter-card.component';
import { CustomercenterComponent } from './components/customercenter/customercenter.component';


@NgModule({
  declarations: [CustomercenterCardComponent, CustomercenterComponent],
  imports: [
    CommonModule,
    CustomercenterRoutingModule
  ]
})
export class CustomercenterModule { }
