import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  totalUsers: number = 0;
  totalComplaints: number = 0;
  totalDepartments: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.fetchDashboardStats();
  }
  fetchDashboardStats() {
    // Mock API response - Replace this with actual API call
    setTimeout(() => {
      this.totalUsers = 150;
      this.totalComplaints = 320;
      this.totalDepartments = 10;
    }, 1000);
  }

  logout() {
    alert('Logging out...');
  }
}
