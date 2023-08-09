import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {


  // windowWidth: number = window.innerWidth;
  // breakpointSmall = 540;
  isMenuOpen: boolean = false;
  isProductsMenuOpen: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  OnChangeSize(): void {
    // this.windowWidth = window.innerWidth;

    // if (this.windowWidth > this.breakpointSmall && this.isMenuOpen === true) {
    //   this.ChangeMenuVisibility();
    // }
  }

  /**Listen to the document click to close navbar's menu */
  // @HostListener('document:click', ['$event'])
  // OnTargetClick(event: MouseEvent): void {
  //   const htmlElementClicked = event.target as HTMLElement;
  //   // this.OnCloseMenu(htmlElementClicked);
  //   console.log(htmlElementClicked.className);
  // }

  /**
   * Close the menu if the user cliks another element
   */
  // OnCloseMenu(htmlElementClicked: HTMLElement): void {
  //   if (this.isMenuOpen && htmlElementClicked.className !== "material-icons-outlined navbar__menu-icon") {
  //     this.ChangeMenuVisibility();
  //   }
  // }

  ChangeMenuVisibility(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if(this.isProductsMenuOpen === true){
      this.isProductsMenuOpen = false;
    }
  }

  ChangeProductsVisibility(){
    this.isProductsMenuOpen = !this.isProductsMenuOpen;
    if(this.isMenuOpen === true){
      this.isMenuOpen = false;
    }
  }

  /**Add menu options as navbar__menu's children */
  // BuildNavbarMenu(): void {
  //   if (this.windowWidth <= this.breakpointSmall) {
  //     this.navbarMenu.nativeElement.appendChild(
  //       this.navbarMenuOptions.nativeElement
  //     );
  //   } else {
  //     console.log("fuera de contenedor");
  //     this.navbarBottom.nativeElement.appendChild(
  //       this.navbarMenuOptions.nativeElement
  //     );
  //   }
  // }
}
