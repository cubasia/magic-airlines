import { inject, Injectable } from '@angular/core';
import { destinazione } from '@models/interfDestinazione';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDestinationService {
  private destinazioni: destinazione[] = [
    { id: '1', descrizione: 'United States' },
    { id: '2', descrizione: 'Australia' },
    { id: '3', descrizione: 'Canada' },
    { id: '4', descrizione: 'Brazil' },
    { id: '5', descrizione: 'England' },
  ];
  constructor(private http: HttpClient) {}



  getDestinazioni(): destinazione[] {
    return this.destinazioni;
  }

}





