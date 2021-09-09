import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userList: { id: number, name: string; age: number, status: boolean }[] = [
    {
      id: 0,
      name: 'Ganesh',
      age: 29,
      status: false
    },
    {
      id: 0,
      name: 'Kunal',
      age: 29,
      status: true
    },
    {
      id: 0,
      name: 'Dhruva',
      age: 29,
      status: false
    },
    {
      id: 0,
      name: 'Kalyani',
      age: 29,
      status: true
    },
    {
      id: 0,
      name: 'Mahesh',
      age: 29,
      status: true
    },
  ];

  selectedUser: { id: number, name: string, age: number };
  // isUserDataAvailable = false;

  ngOnInit(): void {
    // this.isUserDataAvailable = true;
    // // failed to fetch data from backend
    // setTimeout(() => {
    //   this.isUserDataAvailable = false;
    // }, 10000);
  }

  getFirstLetter(name): string {
    return name.toString()[0];
  }
}
