import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUserDetails().subscribe((res) => (this.user = res));
  }

  logout() {
    this.apiService.logout();
    location.reload();
  }
}
