import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/schemas/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "https://localhost:7228/api/"
  constructor(private _http: HttpClient) { 

  }

  login(email: string, password: string): Observable<User>{
    return this._http.post<User>(`${this.URL}auth/signin`, {
      email,
      password
    })
  }
}
