import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { destinazione } from '@models/interfDestinazione';
import { AirRoutes } from '@models/Routes';
import { RoutesmanagerserviceService } from '@services/routesmanagerservice.service';
import { IParametertype } from '@models/interfParameters';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, AfterViewInit {

  Myparameters: IParametertype=null

  constructor() {}
  routeManager = inject(RoutesmanagerserviceService);
  _tempParameters$ = this.routeManager.Parameters;
  _tempRotte$ = this.routeManager.Rotte
  rotte: AirRoutes[] = [];

  ngOnInit(): void {
    //this.rotte = this.routeManager.getResults();
    this._tempParameters$.subscribe(result => {
      this.Myparameters=result
    })
    this._tempRotte$.subscribe(result => {
      this.rotte=[...result]
    })

  }
  ngAfterViewInit(): void {}
}
