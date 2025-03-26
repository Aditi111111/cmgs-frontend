import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  showPopup = false;
  showErrorPopup = false;

  onSubmit() {
    if (!this.email) {
      this.showErrorPopup = true;
      return;
    }
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  closeErrorPopup() {
    this.showErrorPopup = false;
  }
}