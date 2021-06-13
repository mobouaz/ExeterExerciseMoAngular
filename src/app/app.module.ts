import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DealerModule } from './modules/dealer/dealer.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CustomercenterModule } from './modules/customercenter/customercenter.module';
import { NavigationBarComponent } from './core/navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DealerModule,
    CustomercenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
