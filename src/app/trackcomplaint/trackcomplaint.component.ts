import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackcomplaint',
  templateUrl: './trackcomplaint.component.html',
  styleUrls: ['./trackcomplaint.component.css']
})
export class TrackcomplaintComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  complaintType: string = '';
    complaintId: string = '';
    username: string = '';

    complaintTypes: string[] = ['Water Issue', 'Electricity Issue', 'Garbage', 'Road Repair'];

    onSearch() {
        console.log('Searching for:', {
            complaintType: this.complaintType,
            complaintId: this.complaintId,
            username: this.username
        });
    }

    onReset() {
        this.complaintType = '';
        this.complaintId = '';
        this.username = '';
    }
}