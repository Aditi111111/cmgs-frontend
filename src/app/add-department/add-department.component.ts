import { Component, OnInit } from '@angular/core';

interface Department {
    id: number;
    name: string;
    adminName: string;
    contactNo: string;
}

@Component({
    selector: 'app-add-department',
    templateUrl: './add-department.component.html',
    styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
    departments: Department[] = [];
    newDepartment: Department = { id: 0, name: '', adminName: '', contactNo: '' };

    constructor() {}

    ngOnInit(): void {
        this.loadDepartments();
    }

    loadDepartments() {
        // Mock data - replace with API call in real implementation
        this.departments = [
            { id: 1, name: 'Water Department', adminName: 'Aunty', contactNo: '9876543210' },
            { id: 2, name: 'Electricity Department', adminName: 'Kalu', contactNo: '8765432109' }
        ];
    }

    addDepartment() {
        if (!this.newDepartment.name || !this.newDepartment.adminName || !this.newDepartment.contactNo) {
            alert('Please fill all fields!');
            return;
        }

        this.newDepartment.id = this.departments.length + 1;
        this.departments.push({ ...this.newDepartment });

        this.newDepartment = { id: 0, name: '', adminName: '', contactNo: '' };
    }

    deleteDepartment(id: number) {
        this.departments = this.departments.filter(dept => dept.id !== id);
    }
}
