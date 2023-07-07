import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  models: string[] = ["PC54","G5000","ST350","G8000","PC54","G5000","ST350"];
  windowWidth: number = window.innerWidth;

  @HostListener("window:resize", ["$event"])
  onWidthChange(): void{
    this.windowWidth = window.innerWidth;
  }

}
