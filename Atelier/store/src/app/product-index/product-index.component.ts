import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private routeur: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.products;
  }

  goToDetail(productSelected: Product) {
    this.routeur.navigate(['/product', productSelected.id]);
  }

}

