import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { StartOrderComponent } from './pages/start-order/start-order.component';
import { InstaQuoteComponent } from './pages/insta-quote/insta-quote.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartOrderComponent,
    InstaQuoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
