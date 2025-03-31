import { Component, OnInit } from '@angular/core';

interface Department {
    id: number;
    name: string;
    adminName: string;
    contactNo: string;
    totalComplaints: number;
}

@Component({
    selector: 'app-departmentlist',
    templateUrl: './departmentlist.component.html',
    styleUrls: ['./departmentlist.component.css']
})
export class DepartmentListComponent implements OnInit {
    departments: Department[] = [];

    constructor() {}

    ngOnInit(): void {
        this.loadDepartments();
    }

    loadDepartments() {
        // Replace with an API call in real implementation
        this.departments = [
            { id: 1, name: 'Water Department', adminName: 'Aunty', contactNo: '9876543210', totalComplaints: 120 },
            { id: 2, name: 'Electricity Department', adminName: 'Kalu', contactNo: '8765432109', totalComplaints: 95 },
            { id: 3, name: 'Roads & Transport', adminName: 'Shemdi', contactNo: '7654321098', totalComplaints: 75 },
        ];
    }
}
