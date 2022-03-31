import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});

  hide = true;

  constructor(
    private fb: FormBuilder,
    private readonly apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      bio: [null, Validators.required],
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.registrationForm.controls[control].hasError(error);
  };

  submitForm() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.apiService
      .registerUser(this.registrationForm.value)
      .subscribe((res) => {
        if (res.success) {
          console.log('success');
          this.router.navigateByUrl('profile');
        }
      });
  }
}
