import { Component, OnInit } from '@angular/core';
interface Complaint {
  id: number;
  username: string;
  type: string;
  date: string;
  status: string;
}
@Component({
  selector: 'app-complaintslist',
  templateUrl: './complaintslist.component.html',
  styleUrls: ['./complaintslist.component.css']
})
export class ComplaintslistComponent implements OnInit {
  complaints: Complaint[] = [];
  filteredComplaints: Complaint[] = [];
  searchTerm: string = '';
  constructor() { }

  ngOnInit(): void {
    this.loadComplaints();
  }
  loadComplaints() {
    // Replace with API call in real implementation
    this.complaints = [
        { id: 1, username: 'Aunty', type: 'Water', date: '01-01-2025', status: 'Pending' },
        { id: 2, username: 'Kalu', type: 'Electricity', date: '02-01-2025', status: 'Resolved' },
        { id: 3, username: 'Shemdi', type: 'Road', date: '03-01-2025', status: 'In Progress' },
        // { id: 4, username: 'Bob', type: 'Sanitation', date: '2025-03-04', status: 'Pending' },
        // { id: 5, username: 'Charlie', type: 'Security', date: '2025-03-05', status: 'Rejected' },
    ];

    this.filteredComplaints = [...this.complaints];
}

getStatusClass(status: string) {
    switch (status) {
        case 'Pending': return 'status-pending';
        case 'In Progress': return 'status-inprogress';
        case 'Resolved': return 'status-resolved';
        case 'Rejected': return 'status-rejected';
        default: return '';
    }
}

viewComplaint(complaint: Complaint) {
    alert(`Viewing complaint details: ${complaint.type} - ${complaint.date}`);
}
}
