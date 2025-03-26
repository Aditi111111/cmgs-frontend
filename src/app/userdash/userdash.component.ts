import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  totalComplaints = 0;
  solvedComplaints = 0;
  pendingComplaints = 0;
  closedComplaints = 0;

  complaints = [
    {id: 'C123', date: '01-01-2025', status: 'Open', lastUpdate: '07-01-2025', days: 9 },
    // { merged: 'Yes', id: 'C124', date: '2024-03-02', status: 'Pending', lastUpdate: '2024-03-12', days: 10 },
  ];
  constructor() { }
  ngOnInit(): void {
    
  }

}
