import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealerComponent } from './components/dealer/dealer.component';


const routes: Routes = [{ path: 'dealer', component: DealerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
