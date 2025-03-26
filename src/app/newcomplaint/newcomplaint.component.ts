import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomplaint',
  templateUrl: './newcomplaint.component.html',
  styleUrls: ['./newcomplaint.component.css']
})
export class NewcomplaintComponent implements OnInit {
  complaint = {
    complaintType: '',
    complaintSubType: '',
    zone: '',
    details: '',
    proofImage: null
  };

  // Dropdown options
  complaintTypes: string[] = ['Water Issue', 'Road Damage', 'Stray Animals', 'Electricity Issue', 'Garbage Disposal'];
  complaintSubTypes: string[] = ['Leakage', 'Pothole', 'Street dog vaccination', 'Power Cut', 'Waste Overflow'];
  zones: string[] = ['Chandigarh', 'Mohali', 'Panchkula', 'Zirakpur'];

  // Handling file input
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.complaint.proofImage = file;
    }
  }

  // Submitting the complaint
  submitComplaint() {
    if (!this.complaint.complaintType || !this.complaint.complaintSubType || !this.complaint.zone || !this.complaint.details) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Complaint Submitted:', this.complaint);
    alert('Complaint submitted successfully!');
    
    // Reset form
    this.complaint = {
      complaintType: '',
      complaintSubType: '',
      zone: '',
      details: '',
      proofImage: null
    };
  }


  constructor() { }

  ngOnInit(): void {
  }

}
