import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  newProduct = new Product();

  @Output()
  productCreated = new EventEmitter<Product>();

  @Output()
  productCanceled = new EventEmitter<Product>();

  constructor( private http: HttpClient) {  }

  ngOnInit() {
  }

  create(form: NgForm) {
    // Capture du nouveau produit le temps du traitement coté serveur
    const pendingProduct = this.newProduct;
    // Envoi en post sur l'url 'product' la donnée this.newProduct;
    this.http.post('product' , this.newProduct)

        .subscribe(
        response => {console.log(response);},
        reason => { this.cancel(pendingProduct);}
      );

    this.productCreated.emit(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }

  private cancel(pendingProduct: Product) {
    this.productCanceled.emit(pendingProduct);
    this.newProduct = pendingProduct;

  }
}
