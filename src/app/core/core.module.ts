import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { SideMenuForMobileComponent } from './layout/side-menu-for-mobile/side-menu-for-mobile.component';
import { GeneralMenuForMobileComponent } from './layout/general-menu-for-mobile/general-menu-for-mobile.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SideMenuForMobileComponent,
    GeneralMenuForMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent

  ]
})
export class CoreModule { }
