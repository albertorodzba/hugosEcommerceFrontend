import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';


const routes: Routes = [
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      {
        path: 'brand',
        // component: BrandComponent
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
