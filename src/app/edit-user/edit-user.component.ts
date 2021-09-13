import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedUser;
  showForm = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.selectedUser = this.userService.selectedUser;

    if (this.selectedUser) {
      this.showForm = true;
    }
  }
}
