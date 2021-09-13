import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  selectedUser: { id: number, name: string, age: number, status: boolean, birthDate: Date };

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

  constructor() { }
}
