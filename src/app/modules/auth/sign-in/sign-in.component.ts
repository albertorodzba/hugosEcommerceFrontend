import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  token: string = "";

  constructor(private _authService: AuthService){}

  login(): void {
    console.log("EXECUTED");
    this._authService.login("mario_bautista1234@hotmail.com", "Ninjagaiden2")
      .subscribe({
        next: (response) => { localStorage.setItem("Authorization", response.token);},
        error: (error) => {console.log(error);}
      })
  }
}
