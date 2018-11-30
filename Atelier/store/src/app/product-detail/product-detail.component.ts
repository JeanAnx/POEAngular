import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    // Accès aux paramètres de route en tant qu'observable
    // à chaque changement, notre fonction fléchée est appelée
    this.route.paramMap.subscribe(
      params => {
        // parmi les paramètres on va chercher celui qui s'appelle 'id'
        // et on le convertit en valeur numérique
        const id = +params.get('id');
        // on demande ensuite à notre service qui gère les produits de nous extraire celui
        // qui possède l'id recherché
        this.product = this.productsService.get(id);
      }
    )
  }
}
