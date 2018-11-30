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
  currentProduct: Product;

  constructor(
    private logger: LoggerService,
    @Inject(SERVER_URL_TOKEN) serverUrl: string
  ) {

    // ** this.currentProduct = this.products[0];

  }

    add(product: Product): void {
      this.logger.log('Nouveau produit créé');
      // ** this.products.push(product);
      this.currentProduct = product;
    }

    remove(product: Product) {
      console.log('Nouveau produit annulé');
      // ** const pos = this.products.indexOf(product);
      // ** this.products.splice(pos,1);
//      this.currentProduct = this.products[0];

    }

    setCurrent(product: Product): void {
      this.currentProduct = product;
    }


}




