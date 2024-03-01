import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TempContactUsFormComponent } from './pages/temp/temp-contact-us-form/temp-contact-us-form.component';
import { TempCardsFormComponent } from './pages/temp/temp-cards-form/temp-cards-form.component';
import { TempQuotesFormComponent } from './pages/temp/temp-quotes-form/temp-quotes-form.component';
import { TempShirtsFormComponent } from './pages/temp/temp-shirts-form/temp-shirts-form.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent,
    TempContactUsFormComponent,
    TempCardsFormComponent,
    TempQuotesFormComponent,
    TempShirtsFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
