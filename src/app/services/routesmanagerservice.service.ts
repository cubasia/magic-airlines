import { Injectable } from '@angular/core';
import { AirRoutes } from '@models/Routes';
import { RotteAeree } from '@models/Routes';
import { destinazione  } from '@models/interfDestinazione';

@Injectable({
  providedIn: 'root'
})
export class RoutesmanagerserviceService {


  private da!: destinazione;
  private a!: destinazione;
  private dal!: Date;
  private al!: Date;


  private results:AirRoutes[] = [];

  constructor() { }

  setparameters(da: destinazione, a: destinazione, dal: Date, al: Date): void {
    this.da = da;
    this.a = a;
    this.dal = dal;
    this.al = al;

  }

  getparameters()  {
    return {
  "da":this.da ,
  "a":this.a,
  "dal": this.dal,
  "al": this.al
}  }

  setResults(results: AirRoutes[]): void {
    this.results =[...results];
  }
  getResults(): AirRoutes[] {
    return this.results;
  }
  searchRoutes(partenza: destinazione, arrivo: destinazione, dal: Date, al: Date) {

    // console.log(partenza.id,arrivo.id,dal,al)

    let res = RotteAeree.filter(Rotta => {
      Rotta.partoDal.setHours(0, 0, 0, 0)
      Rotta.arrivoIl.setHours(0, 0, 0, 0)
      dal.setHours(0, 0, 0, 0);
      al.setHours(0, 0, 0, 0)
      // console.log(Rotta.partoDal, Rotta.arrivoIl);
      return Rotta.partenza.id == partenza.id &&
      Rotta.arrivo.id == arrivo.id &&
      Rotta.partoDal.getTime() >= dal.getTime() &&
      Rotta.arrivoIl.getTime() == al.getTime()
    })
    // console.log(res.length)
    return res
  }


}
