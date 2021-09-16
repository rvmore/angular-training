import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: IUser[] = [];
  pageTitle: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userList = this.userService.userList;

    this.pageTitle = this.activatedRoute.snapshot.data.title;
  }

  onEditUser(user): void {

    // this.router.navigateByUrl(`/edit-user?id=${user.id}`);

    this.router.navigate([`/edit-user/${user.id}`]);

    // const updatedBirthDate = `${user.birthDate.getFullYear()},${user.birthDate.getMonth(2)},${user.birthDate.getDate()}`;

    // const updatedUser = {
    //   ...user,
    //   birthDate: updatedBirthDate
    // };

    // this.router.navigate(['/edit-user'], { state: updatedUser });

  }

}
