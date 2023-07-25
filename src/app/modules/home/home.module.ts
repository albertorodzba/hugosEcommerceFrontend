import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { InConstructionPageComponent } from './components/in-construction-page/in-construction-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent,
    InConstructionPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
