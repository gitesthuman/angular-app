import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  year: string = '';
  make: string = '';
  model: string = '';
  type: string = '';

  constructor() { }

  ngOnInit(): void { }

  submitForm() {
    this.year = '';
    this.make = '';
    this.model = '';
    this.type = '';

  }
}
