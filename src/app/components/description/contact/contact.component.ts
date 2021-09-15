import { Component, OnInit } from '@angular/core';
//import '../../../../assets/smtp.js';

declare let Email: any;

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    // alert(this.name + ', ' + this.email + ', ' + this.message);
    // window.location.reload();
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
