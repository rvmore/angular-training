import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: NgForm;

  selectedUser: IUser;
  showForm = false;

  pageTitle: string;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pageTitle = this.activatedRoute.snapshot.data.title;
    const userId = this.activatedRoute.snapshot.params.id;
    this.selectedUser = this.userService.getUserById(userId);
    if (this.selectedUser) {
      this.showForm = true;
    }
  }

  onSaveUser(form: NgForm): void {

    if (form.valid) {
      this.userService.updateUserById(this.selectedUser.id, this.selectedUser);
      this.router.navigate(['/users']);
    }

    // console.log(form);
    // this.userService.updateUserById(this.selectedUser.id, this.selectedUser);
    // this.router.navigate(['/users']);
  }
}
