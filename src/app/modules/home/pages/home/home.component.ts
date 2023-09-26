import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  models: string[] = [
    'PC54',
    'G5000',
    'ST350',
    'G8000',
    'PC54',
    'G5000',
    'ST350',
  ];
  windowWidth: number = window.innerWidth;

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
  @HostListener('window:resize', ['$event'])
  onWidthChange(): void {
    this.windowWidth = window.innerWidth;
  }
}
