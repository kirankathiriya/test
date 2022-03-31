import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  registerURL = 'https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d';
  profileURL = 'https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    localStorage.setItem('user', JSON.stringify(user));
    // Since POST method was not allowed, I'm making a GET request
    // return this.http.POST<any>(this.registerURL, user);
    return this.http.get<any>(this.registerURL);
  }

  logout() {
    localStorage.removeItem('user')
  }

  getUserDetails(): Observable<any> {
    return this.http.get<any>(this.profileURL);
  }
}
