import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedUser: IUser;
  showForm = false;

  pageTitle: string;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.selectedUser = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    // this.selectedUser = this.userService.selectedUser;
    this.pageTitle = this.activatedRoute.snapshot.data.title;

    // const userId = this.activatedRoute.snapshot.queryParams.id;

    const userId = this.activatedRoute.snapshot.params.id;
    this.selectedUser = this.userService.getUserById(userId); // { id: }


    // console.log(this.router.getCurrentNavigation());
    // this.selectedUser = this.router.getCurrentNavigation().extras.state;

    console.log(this.activatedRoute);

    if (this.selectedUser) {
      this.showForm = true;
    }
  }

  onSaveUser(): void {
    this.userService.updateUserById(this.selectedUser.id, this.selectedUser);
    this.router.navigate(['/users']);
  }
}
