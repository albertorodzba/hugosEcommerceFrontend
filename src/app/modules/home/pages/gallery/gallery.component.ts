import { Component } from '@angular/core';
import { ScreenprintingPaths, EmbroideryPaths, OtherPaths } from 'src/app/core/data/galleryPaths';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryPaths: string[] = ScreenprintingPaths;
  gallerySelected: string = "Screenprinting";
  
  constructor(){
    console.log(this.galleryPaths.length);
  }

  OnChangeGallery(gallery: string): void{
    
    if(gallery === "Screenprinting"){
      this.galleryPaths = ScreenprintingPaths;
    }
    else if(gallery === "Embroidery"){
      this.galleryPaths = EmbroideryPaths;
    }
    else{
      this.galleryPaths = OtherPaths;
    }
    this.gallerySelected = gallery;
  }
}
