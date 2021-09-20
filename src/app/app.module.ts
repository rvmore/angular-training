import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
