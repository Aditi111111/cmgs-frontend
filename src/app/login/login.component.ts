import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  url: string = 'http://localhost:8081/admin/login';

  private httpHeaders = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  };

  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder, private httpclient: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  public loginUser(credentials: any) {
    return this.httpclient.post<any>(this.url, credentials, this.httpHeaders);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginUser(this.loginForm.value).subscribe({
        next: (data) => {
          console.log("Login successful:", data);
          alert("Login successful!");
        },
        error: (error) => {
          console.error("Login failed:", error);
          this.errorMessage = "Invalid email or password. Please try again.";
        }
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
