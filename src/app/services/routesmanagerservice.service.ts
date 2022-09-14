import { Injectable } from '@angular/core';
import { AirRoutes } from '@models/Routes';
import { RotteAeree } from '@models/Routes';
import { destinazione  } from '@models/interfDestinazione';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IParameter,IParametertype
} from '@models/interfParameters';
@Injectable({
  providedIn: 'root',
})
export class RoutesmanagerserviceService {
  private results: AirRoutes[] = [];
  private routesSubject = new BehaviorSubject<AirRoutes[]>(this.results);

  private parameterSubject = new BehaviorSubject<IParametertype>(null);

  constructor() {}

  setparameters(parameters: IParametertype) : void {

    // this.myParameters!.da = parameters!.da;
    // this.myParameters!.a = parameters!.a;
    // this.myParameters!.dal = parameters!.dal;
    // this.myParameters!.al = parameters!.al;
    this.parameterSubject.next(parameters);
  }

  get Parameters() {
    return this.parameterSubject.asObservable()
  }

  get Rotte(): Observable<AirRoutes[]> {
    return this.routesSubject.asObservable();
  }
  searchRoutes(
    parameters: IParametertype
  ) {
    // console.log(partenza.id,arrivo.id,dal,al)

    let res = RotteAeree.filter((Rotta) => {
      Rotta.partoDal.setHours(0, 0, 0, 0);
      Rotta.arrivoIl.setHours(0, 0, 0, 0);
      parameters!.dal.setHours(0, 0, 0, 0);
      parameters!.al.setHours(0, 0, 0, 0);
      // console.log(Rotta.partoDal, Rotta.arrivoIl);
      return (
        Rotta.partenza.id == parameters!.da.id &&
        Rotta.arrivo.id == parameters!.a.id &&
        Rotta.partoDal.getTime() >= parameters!.dal.getTime() &&
        Rotta.arrivoIl.getTime() == parameters!.al.getTime()
      );
    });
    // console.log(res.length)
    this.routesSubject.next(res);
  }
}
