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
  products!: Product[];

  constructor() { }

  ngOnInit(): void { }

  submitForm() {
    if (this.year != '') this.year = '&year=' + this.year;
    if (this.make != '') this.make = '&make=' + this.make;
    if (this.model != '') this.model = '&model=' + this.model;
    if (this.type != '') this.type = '&type=' + this.type;

    fetch("https://car-data.p.rapidapi.com/cars?limit=10&page=0" + this.year + this.make + this.model + this.type, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "car-data.p.rapidapi.com",
        "x-rapidapi-key": "451d653b3bmsh6f07b91ec145b0bp141b0ajsnf601ce9d9fe0"
      }
    })
      .then(response => response.json())
      .then(json => { console.log(json); this.products = json; })
      .catch(err => { console.error(err); });

    this.year = '';
    this.make = '';
    this.model = '';
    this.type = '';
  }
}

export class Product {
  constructor(
    public id: number,
    public year: string,
    public make: string,
    public model: string,
    public type: string,
  ) { }
}