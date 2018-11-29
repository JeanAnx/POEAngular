import { Injectable } from '@angular/core';
import {Product} from './product';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  products: Array<Product>;

  // J'appelle le service de logger pour pouvoir utiliser ici ses méthodes (log)
  // et récupération du service client http via l'injecteur de dépendances

  constructor(private logger: LoggerService, private http: HttpClient) {

    this.products = [];
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

      this.logger.log('Création des produits');

  }
}
