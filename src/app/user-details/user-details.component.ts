import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: string;
  userDetails: IUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.params?.id;
  }

  ngOnInit(): void {
    this.userService.getUserDetails(this.userId).subscribe((user) => {
      this.userDetails = user;
    });
  }

  onNavigateBack(): void {
    this.router.navigate(['/user-list']);
  }
}
