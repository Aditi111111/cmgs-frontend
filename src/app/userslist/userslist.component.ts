import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  searchTerm: string = '';
  users = [
      { id: '1', username: 'Aunty', email: 'aunty@example.com', role: 'Admin' },
      { id: '2', username: 'Kalu', email: 'kalu@example.com', role: 'User' },
      { id: '3', username: 'Shemdi', email: 'shemdi@example.com', role: 'User' }
  ];
  
  filteredUsers = [...this.users];

  searchUser() {
      if (!this.searchTerm) {
          this.filteredUsers = [...this.users];
          return;
      }
      this.filteredUsers = this.users.filter(user =>
          user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }

  deleteUser(userId: string) {
      if (confirm('Are you sure you want to delete this user?')) {
          this.users = this.users.filter(user => user.id !== userId);
          this.filteredUsers = [...this.users];
      }
  }
}
