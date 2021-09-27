import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { IUser } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: IUser[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    this.userService.getUserList().subscribe((users: IUser[]) => {
      this.userList = users;
    });
  }

  onAddEditUser(): void {
    this.router.navigate(['/register']);
  }

  onViewUser(id: string): void {
    this.router.navigate([`/user-details/${id}`]);
  }

  onDeleteUser(id): void {
    this.userService.deleteUser(id).subscribe((user) => {
      this.getUsersList();
    });
  }
}
