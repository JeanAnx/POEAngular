import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {LoggerService} from './logger.service';
import {Product} from './product';
import {defer} from 'rxjs';

let httpClientSpy;
let logger;
let productsService;

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('ProductsService', () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    logger = { log: (msg: string) => {} };
    productsService = new ProductsService( logger as LoggerService , httpClientSpy);

  });

  // @ts-ignore
  it('should be created', () => {
    const expectedData: Product[] = [

        [{
          'id': 1,
          'brand': 'Adidas',
          'name': 'Trainer',
          'price': 100,
          'picture': 'adtrainer.jpg'
        },
        {
          'id': 2,
          'brand': 'New Balance',
          'name': 'utf8',
          'price': 80,
          'picture': 'nb.jpg'
        },
        {
          'id': 3,
          'brand': 'Vans',
          'name': 'Sk8',
          'price': 85,
          'picture': 'vans.jpg'
        },
        {
          'id': 4,
          'brand': 'Timberland',
          'name': 'Écrase-merde',
          'price': 210,
          'picture': 'tim.jpg'
        },
        {
          'id': 5,
          'brand': 'North Face',
          'name': 'Chaussons',
          'price': 40,
          'picture': 'chaussonsnf.jpg'
        },
        {
          'id': 6,
          'brand': 'Nike',
          'name': 'Moches',
          'price': 250,
          'picture': 'airvapor.jpg'
        },
        {
          'id': 7,
          'brand': 'Clown',
          'name': 'FUN FUN FUN',
          'price': 50,
          'picture': 'clown.jpg'
        },
        {
          'id': 8,
          'brand': 'Repetto',
          'name': 'Pointes',
          'price': 155,
          'picture': 'repetto.jpg'
        },
        {
          'id': 9,
          'brand': 'Roces',
          'name': 'Ice skates',
          'price': 155,
          'picture': 'skate.jpg'
        },
        {
          'id': 10,
          'brand': 'Buffalo',
          'name': 'Camel',
          'price': 685,
          'picture': 'buffalo.jpg'
        }
      ]

      ];

      httpClientSpy.get.and.returnValue(asyncData(expectedData));
      expect(productsService.products.length).toBe(3);

    ]

  });
});
