import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
                        { path: 'dealers', loadChildren:'./modules/dealer/dealer.module#DealerModule'},
                        { path: 'customercenter', loadChildren:'./modules/customercenter/customercenter.module#CustomercenterModule'},
                        { path: '**', component: HomeComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
