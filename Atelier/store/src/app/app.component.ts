import {Component, Inject} from '@angular/core';
import { Product} from './product';
import {ProductsService} from './products.service';
import {LoggerService} from './logger.service';
import {SERVER_URL_TOKEN} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sneaker\'Store';
  products: Product[] = [];
  currentProduct: Product;

  constructor(
    productsService: ProductsService,
    private logger: LoggerService,
    @Inject(SERVER_URL_TOKEN) serverUrl: string
  ) {

    this.products = productsService.products;
    this.currentProduct = this.products[0];

  }

    add(product: Product): void {
      this.logger.log('Nouveau produit créé');
      this.products.push(product);
      this.currentProduct = product;
    }

    setCurrent(product: Product): void {
      this.currentProduct = product;
    }

}




