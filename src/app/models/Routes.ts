import { destinazione } from "@models/interfDestinazione"

export interface AirRoutes {
  id: string;
  partenza: destinazione;
  arrivo: destinazione;
  partoDal: Date;
  arrivoIl: Date;
}

export const RotteAeree: AirRoutes[] = [
  {
    id: '01',
    partenza: { id: '1', descrizione: 'United States' },
    arrivo: { id: '2', descrizione: 'Australia' },
    partoDal: new Date('10/1/22'),
    arrivoIl: new Date('10/2/22'),
  },
  {
    id: '02',
    partenza: { id: '1', descrizione: 'United States' },
    arrivo: { id: '3', descrizione: 'Canada' },
    partoDal: new Date('10/1/22'),
    arrivoIl: new Date('10/2/22'),
  },
  {
    id: '03',
    partenza: { id: '1', descrizione: 'United States' },
    arrivo: { id: '4', descrizione: 'Brazil' },
    partoDal: new Date('10/1/22'),
    arrivoIl: new Date('10/2/22'),
  },
  {
    id: '04',
    partenza: { id: '1', descrizione: 'United States' },
    arrivo: { id: '5', descrizione: 'England' },
    partoDal: new Date('10/1/22'),
    arrivoIl: new Date('10/2/22'),
  },
  {
    id: '05',
    partenza: { id: '1', descrizione: 'United States' },
    arrivo: { id: '5', descrizione: 'England' },
    partoDal: new Date('10/1/22'),
    arrivoIl: new Date('10/2/22'),
  }
];

