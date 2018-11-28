import { Component } from '@angular/core';
import { Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sneaker\'Store';
  products: Product[] = [];
  currentProduct: Product;


  constructor() {
    this.products.push(new Product());
    this.products[0].brand = 'New Balance';
    this.products[0].name = 'u410cb';
    this.products[0].price = 70;
    this.products[0].picture = 'nb.jpg';

    this.products.push(new Product());
    this.products[1].brand = 'Adidas';
    this.products[1].name = 'Trainer';
    this.products[1].price = 90;
    this.products[1].picture = 'adtrainer.jpg';

    this.products.push(new Product());
    this.products[2].brand = 'Vans';
    this.products[2].name = 'Sk8';
    this.products[2].price = 110;
    this.products[2].picture = 'vans.jpg';
  }

    setCurrent(product: Product): void {
    this.currentProduct = product;
    }

}
