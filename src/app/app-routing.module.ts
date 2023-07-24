import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(module=> module.HomeModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
