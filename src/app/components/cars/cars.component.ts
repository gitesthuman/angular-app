import { Component, OnInit } from '@angular/core';
import { Car } from '../../Car';
import { CARS } from '../../mock-cars';

@Component({
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Car[] = CARS;

  constructor() { }

  ngOnInit(): void {
  }

}
