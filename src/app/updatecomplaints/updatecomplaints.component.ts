import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatecomplaints',
  templateUrl: './updatecomplaints.component.html',
  styleUrls: ['./updatecomplaints.component.css']
})
export class UpdatecomplaintsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchTerm: string = '';
  complaints = [
      { id: '1', username: 'Aunty', type: 'Water Issue', date: '01-01-2025', status: 'Pending' },
      { id: '2', username: 'Kalu', type: 'Electricity Issue', date: '02-01-2025', status: 'In Progress' },
      { id: '3', username: 'Shemdi', type: 'Road Damage', date: '03-01-2025', status: 'Resolved' }
  ];
  
  filteredComplaints = [...this.complaints];

  searchComplaint() {
      if (!this.searchTerm) {
          this.filteredComplaints = [...this.complaints];
          return;
      }
      this.filteredComplaints = this.complaints.filter(c =>
          c.id.includes(this.searchTerm) || c.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }

  updateComplaints() {
      console.log('Updated Complaints:', this.complaints);
      alert('Complaint status updated successfully!');
  }
}
