import { Component } from '@angular/core';
import { Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sneaker\'Store';
  product: Product;

  constructor() {
    this.product = new Product();
    this.product.brand = "New Balance";
    this.product.name = "u410cb";
    this.product.price = 70;
    this.product.picture = "https://www.chaussures.fr/media/catalog/product/cache/image/650x650//8/0/803577_new_balance_u410cb_classics_niebieski_ac_01.jpg";
  }
}
