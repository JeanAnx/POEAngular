import { Injectable } from '@angular/core';
import {AppModule} from './app.module';

@Injectable({
  providedIn: AppModule
})

export class LoggerService {

  // On peut supprimer le constructeur (pas besoin)

    log(message): void {
      console.log(message);

  }


}
