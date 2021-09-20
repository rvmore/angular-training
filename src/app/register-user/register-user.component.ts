import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RegisterUserComponent implements OnInit {
  @ViewChild('registerUser') registerUserForm: NgForm;
  hobbies = [''];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form): void {
    const { hobbies, ...payload } = form.value;

    const formattedHobbies = [];
    for (const key in hobbies) {
      formattedHobbies.push(hobbies[key]);
    }

    const formattedFormData = {
      ...payload,
      hobbies: formattedHobbies
    }

    console.log(formattedFormData);
  }

  onNameChange(event): void {
    const name = event.target.value;
    if (name.includes('.')) {
      this.registerUserForm.form.controls.name.setErrors({ noDot: true });
      return;
    }

    this.registerUserForm.form.controls.name.setErrors(null);
  }

  addHobby(): void {
    this.hobbies.push('');
  }

}
