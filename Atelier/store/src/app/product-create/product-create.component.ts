import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {NgForm} from '@angular/forms';
import {log} from 'util';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  newProduct = new Product();

  @Output()
  productCreated = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  create(form: NgForm) {
    this.productCreated.emit(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }

}
