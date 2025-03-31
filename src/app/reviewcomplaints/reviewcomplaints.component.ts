import { Component, OnInit } from '@angular/core';
interface Complaint {
  id: number;
  username: string;
  type: string;
  date: string;
  status: string;
  isAccepted: boolean;
}
@Component({
  selector: 'app-reviewcomplaints',
  templateUrl: './reviewcomplaints.component.html',
  styleUrls: ['./reviewcomplaints.component.css']
})
export class ReviewcomplaintsComponent implements OnInit {
  complaints: Complaint[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadComplaints();
  }
  loadComplaints() {
    // Replace with an API call in real implementation
    this.complaints = [
        { id: 1, username: 'Aunty', type: 'Water', date: '01-03-2025', status: 'status', isAccepted: false },
        { id: 2, username: 'Kalu', type: 'Electricity', date: '02-03-2025', status: 'status', isAccepted: false },
        { id: 3, username: 'Shemdi', type: 'Road', date: '03-03-2025', status: 'status', isAccepted: false },
    ];
}

updateStatus(complaint: Complaint) {
    complaint.status = complaint.isAccepted ? 'Accepted' : 'Declined';
}

getStatusClass(status: string) {
    switch (status) {
        case 'Pending': return 'status-pending';
        case 'Accepted': return 'status-accepted';
        case 'Declined': return 'status-declined';
        default: return '';
    }
}
}

