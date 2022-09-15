import { inject, Injectable } from '@angular/core';
import { destinazione } from '@models/interfDestinazione';
import { HttpclientService } from '@services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDestinationService {
  // private destinazioni: destinazione[] = [
  //   { id: '1', descrizione: 'United States' },
  //   { id: '2', descrizione: 'Australia' },
  //   { id: '3', descrizione: 'Canada' },
  //   { id: '4', descrizione: 'Brazil' },
  //   { id: '5', descrizione: 'England' },
  // ];
  constructor() {}

  http=inject(HttpclientService)

  getDestinazioni():Observable<destinazione[]>  {
    // return this.destinazioni;
    let _jsonURL = 'assets/Json/destinazioni/destinazioni.json';
    return this.http.getListWithUrl<destinazione>(_jsonURL);
  }

}





