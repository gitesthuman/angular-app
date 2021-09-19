import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() source: string = '';
  @Input() alt: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
