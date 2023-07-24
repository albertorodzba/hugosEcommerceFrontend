import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './pages/panel/panel.component';
import { shirtsTableComponent } from './components/shirts-table/shirts-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SizesComponent } from './components/sizes/sizes.component';
import { BrandComponent } from './components/brand/brand.component';
import { BronchureComponent } from './components/bronchure/bronchure.component';
import { CardComponent } from './components/card/card.component';
import { CategoryComponent } from './components/category/category.component';
import { CoatingComponent } from './components/coating/coating.component';


@NgModule({
  declarations: [
    PanelComponent,
    shirtsTableComponent,
    SizesComponent,
    BrandComponent,
    BronchureComponent,
    CardComponent,
    CategoryComponent,
    CoatingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
