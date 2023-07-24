import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { shirtsTableComponent } from './components/shirts-table/shirts-table.component';
import { SizesComponent } from './components/sizes/sizes.component';
import { BrandComponent } from './components/brand/brand.component';
import { BronchureComponent } from './components/bronchure/bronchure.component';
import { CardComponent } from './components/card/card.component';
import { CoatingComponent } from './components/coating/coating.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      {
        path: 'brand',
        component: BrandComponent
      },
      {
        path: 'bronchure',
        component: BronchureComponent
      },
      {
        path: 'card',
        component: CardComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'coating',
        component: CoatingComponent
      },
      {
        path: 'shirts',
        component: shirtsTableComponent
      },
      {
        path: 'sizes',
        component: SizesComponent
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
