import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomercenterComponent } from './components/customercenter/customercenter.component';

const routes: Routes = [{ path: 'customercentersections', component: CustomercenterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomercenterRoutingModule { }
