import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getEmailMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter Email';
    }
    else {
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
  }

  getPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'Please Enter Password';
    }
  }

  onSubmit() {
    if (this.email.value != '' && this.password.value != '') {
      this.snackBar.open('Login Successfully');
    }
  }

}
