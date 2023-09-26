import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TempCardsFormComponent } from './pages/temp/temp-cards-form/temp-cards-form.component';
import { TempContactUsFormComponent } from './pages/temp/temp-contact-us-form/temp-contact-us-form.component';
import { TempQuotesFormComponent } from './pages/temp/temp-quotes-form/temp-quotes-form.component';
import { TempShirtsFormComponent } from './pages/temp/temp-shirts-form/temp-shirts-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: TempContactUsFormComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'cards',
    component: TempCardsFormComponent
  },
  {
    path: 'quote',
    component: TempQuotesFormComponent
  },
  {
    path: 'shirts',
    component:TempShirtsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
