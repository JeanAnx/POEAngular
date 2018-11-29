import { Injectable } from '@angular/core';
import {Product} from './product';
import {LoggerService} from './logger.service';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: Array<Product> = [];

  // J'appelle le service de logger pour pouvoir utiliser ici ses méthodes (log)
  // et récupération du service client http via l'injecteur de dépendances

  constructor(private logger: LoggerService, private http: HttpClient) {

    // Envoi d'une requête HTTP GET vers la ressource assets/data.json
    // et conversion de l'observable en promesse
    this.http.get('assets/data.json').toPromise()
      // Traitement de la réponse en cas de succès
      .then( (response: Product[]) => {
        this.logger.log(response);
        for (const product of response) {
          this.products.push(product);
        }

      })

      .catch(reason => {
        console.log('Woops something\'s wrong', reason)
    });

  }
}
