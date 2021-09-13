import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('myInput', {read: ElementRef}) myInput: ElementRef;


  // isUserDataAvailable = false;

  ngOnInit(): void {
    // console.log(this.myInput);
    // this.isUserDataAvailable = true;
    // // failed to fetch data from backend
    // setTimeout(() => {
    //   this.isUserDataAvailable = false;
    // }, 10000);
  }

  // ngAfterViewInit(): void {
  //   console.log(this.myInput);
  // }

  // getFirstLetter(name): string {
  //   return name.toString()[0];
  // }

  // onEditUser(user): void {
  //   this.selectedUser = user;
  // }

  // onHideUserForm(): void {
  //   this.selectedUser = null;
  // }

  // // sibling communication

  // onUserSelected(user): void {
  //   this.selectedUser = user;
  // }
}
