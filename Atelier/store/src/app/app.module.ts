import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {LoggerService} from './logger.service';
import {configFactory, SERVER_URL, SERVER_URL_TOKEN} from './app.config';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { MenuComponent } from './menu/menu.component';

const COUCOU = new InjectionToken('Coucou');
const LOGGER_ALIAS = new InjectionToken('Alias vers le logger');
const SECONDE_CONFIG = new InjectionToken('Deuxième config');


@NgModule({
  declarations: [
    AppComponent,
    ProductThumbnailComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductIndexComponent,
    MenuComponent
  ],
  imports: [ // Gestion des fonctionnalités du Framework disponibles dans l'application
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Chargement des configurations de routes
    RouterModule.forRoot([
      { path: '' , redirectTo: 'product' , pathMatch: 'full'},
      { path: 'product' , component: ProductDetailComponent},
      { path: 'product/:id' , component: ProductDetailComponent},
      { path: 'create' , component: ProductCreateComponent},
      { path: 'index' , component: ProductIndexComponent},
    ])
  ],
  providers: [
    LoggerService,
    { provide: LoggerService, useClass: LoggerService },
    { provide: SERVER_URL_TOKEN, useValue: SERVER_URL},
    { provide: COUCOU, useValue: 'coucou les gens'},
    { provide: LOGGER_ALIAS, useExisting: LoggerService},
    { provide: SECONDE_CONFIG, useFactory: configFactory, deps: ['Jean'] /* deps = ce qu'on passe à la fonc. */ }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
