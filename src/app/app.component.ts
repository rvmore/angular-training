import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput', {read: ElementRef}) myInput: ElementRef;

  userList: { id: number, name: string; age: number, birthDate: Date, status: boolean }[] = [
    {
      id: 0,
      name: 'Ganesh',
      age: 29,
      status: false,
      birthDate: new Date('1996-07-29')
    },
    {
      id: 0,
      name: 'Kunal',
      age: 29,
      status: true,
      birthDate: new Date('1994-07-29')
    },
    {
      id: 0,
      name: 'Dhruva',
      age: 29,
      status: false,
      birthDate: new Date('1992-07-05')
    },
    {
      id: 0,
      name: 'Kalyani',
      age: 29,
      status: true,
      birthDate: new Date('1880-07-29')
    },
    {
      id: 0,
      name: 'Mahesh',
      age: 29,
      status: true,
      birthDate: new Date('1995-02-21')
    },
  ];

  selectedUser: { id: number, name: string, age: number, status: boolean, birthDate: Date };
  // isUserDataAvailable = false;

  ngOnInit(): void {
    console.log(this.myInput);
    // this.isUserDataAvailable = true;
    // // failed to fetch data from backend
    // setTimeout(() => {
    //   this.isUserDataAvailable = false;
    // }, 10000);
  }

  ngAfterViewInit(): void {
    console.log(this.myInput);
  }

  getFirstLetter(name): string {
    return name.toString()[0];
  }

  onEditUser(user): void {
    this.selectedUser = user;
  }

  onHideUserForm(): void {
    this.selectedUser = null;
  }
}
