import { Injectable } from '@angular/core';
import { IUser } from '../shared/models/user.model';

@Injectable()
export class UserService {
  selectedUser: IUser;

  userList: IUser[] = [
    {
      id: 0,
      name: 'Ganesh',
      age: 29,
      status: false,
      birthDate: new Date('1996-07-29')
    },
    {
      id: 1,
      name: 'Kunal',
      age: 29,
      status: true,
      birthDate: new Date('1994-07-29')
    },
    {
      id: 2,
      name: 'Dhruva',
      age: 29,
      status: false,
      birthDate: new Date('1992-07-05')
    },
    {
      id: 3,
      name: 'Kalyani',
      age: 29,
      status: true,
      birthDate: new Date('1880-07-29')
    },
    {
      id: 4,
      name: 'Mahesh',
      age: 29,
      status: true,
      birthDate: new Date('1995-02-21')
    },
  ];

  constructor() { }

  getUserById(id): IUser {
    return this.userList.find(user => user.id === +id);
  }

  updateUserById(searchId: number, updatedUser: IUser): void {
    const users = this.userList;

    this.userList = users.filter(user => {
      if (user.id === searchId) {
        user.id = updatedUser.id;
        user.name = updatedUser.name;
        user.age = updatedUser.age;
        user.birthDate = updatedUser.birthDate;
        user.status = updatedUser.status;

        return user;
      }

      return user;
    });
  }
}
