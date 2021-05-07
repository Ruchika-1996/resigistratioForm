import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective
  ],
  imports: [
  
    ReactiveFormsModule,
    BrowserModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
