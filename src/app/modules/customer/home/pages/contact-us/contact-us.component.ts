import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  OnSubmit(): void{

  }

  ValidateFile(event: Event): void{
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const selectedFile = input.files![0];
    const sizeMB: number =  selectedFile.size / 1048576;//MEGABYTES
    
    
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const fileData = e.target.result.split(',')[1]; // Obtener solo la parte de Base64
      console.log("base64");
      console.log(fileData);
    };

    reader.readAsDataURL(selectedFile);
  

    console.log(selectedFile);
    console.log(sizeMB + " MB")
  }
}
