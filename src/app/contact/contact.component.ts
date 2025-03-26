import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  showPopup = false;
  showErrorPopup = false;

  onSubmit() {
    if (!this.contact.name || !this.contact.email || !this.contact.subject || !this.contact.message) {
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
