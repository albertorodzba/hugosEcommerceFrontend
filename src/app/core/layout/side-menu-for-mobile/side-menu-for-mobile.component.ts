import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu-for-mobile',
  templateUrl: './side-menu-for-mobile.component.html',
  styleUrls: ['./side-menu-for-mobile.component.css']
})
export class SideMenuForMobileComponent {

  apparel: string[] = [
    'T-Shirts',
    'Polo Shirts',
    'Caps & Benies',
    'Hoodies',
    'Jackets',
    'Safety Wear',
  ];

  marketingProducts: string[] = [
    'Business Cards',
    'Postcards',
    'Flyers & Brochures',
    'Canvas',
    'Car Magnets',
    'Yard Signs',
  ];

  grandFormat: string[] = [
    'Banner',
    'Banner Stand',
    'PVC Signs',
    'Alluminum Signs',
    'Windows Graphics',
    'Wall Decals',
    'Posters',
  ];
}
