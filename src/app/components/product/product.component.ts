import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() year: string = '';
  @Input() make: string = '';
  @Input() model: string = '';
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
