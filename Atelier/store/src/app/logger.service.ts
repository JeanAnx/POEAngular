import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {

  // On peut supprimer le constructeur (pas besoin)

    log(message): void {
      console.log(message);

  }


}
