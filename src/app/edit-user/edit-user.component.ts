import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user: { id: number, name: string, age: number };

  inputUser: { id: number, name: string, age: number };

  constructor() { }

  ngOnInit(): void {
  }

}
