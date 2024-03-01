import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartOrderComponent } from './pages/start-order/start-order.component';
import { InstaQuoteComponent } from './pages/insta-quote/insta-quote.component';

const routes: Routes = [
  {
    path:'start-order',
    component: StartOrderComponent
  },
  {
    path: 'insta-quote',
    component: InstaQuoteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
