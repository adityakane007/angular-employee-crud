import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]+')]);
  address = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]+')]);
  mobile = new FormControl('', [Validators.required, Validators.maxLength(12)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  getEmailMessage() {
    if (this.email.hasError('required')) {
      return 'Please Enter Email';
    }
    else {
      return this.email.hasError('email') ? 'Not a Valid Email' : '';
    }
  }

  getNameMessage() {
    if (this.name.hasError('required')) {
      return "Please Enter Name";
    }
    else {
      return this.name.hasError('pattern') ? 'Not a Valid Name' : '';
    }
  }
  getAddressMessage() {
    if (this.address.hasError('required')) {
      return "Please Enter Address";

    } else {
      return this.address.hasError('pattern') ? 'Not a Valid Address' : '';
    }
  }
  getMobileMessage() {
    if (this.mobile.hasError('required')) {
      return "Please Enter Mobile";

    } else if (this.mobile.hasError('maxlength')) {
      return "Mobile Number Exceeds Max Length Limit";
    }
  }

  onSubmit() {

  }

}
