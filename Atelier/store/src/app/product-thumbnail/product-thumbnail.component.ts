import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {log} from 'util';


@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  productSelected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.productSelected.emit(this.product);
  }

}
