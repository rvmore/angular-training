import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: { id: number, name: string, age: number, status: boolean, birthDate: Date };

  inputUser: { id: number, name: string, age: number, status: boolean, birthDate: Date } = {
    id: 0, name: '', age: 0, status: false, birthDate: new Date('01-01-1996')
  };

  constructor() { }

  ngOnInit(): void {
    console.log('Rendered with initialization');
    this.inputUser.id = this.user.id;
    this.inputUser.name = this.user.name;
    this.inputUser.age = this.user.age;
    this.inputUser.status = this.user.status;
    this.inputUser.birthDate = this.user.birthDate;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Rendered with changes');
    if (changes.user) {
      this.inputUser.id = this.user.id;
      this.inputUser.name = this.user.name;
      this.inputUser.age = this.user.age;
      this.inputUser.status = this.user.status;
      this.inputUser.birthDate = this.user.birthDate;
    }
  }

  ngOnDestroy(): void {
    console.log('On Destroy called');
  }

}
