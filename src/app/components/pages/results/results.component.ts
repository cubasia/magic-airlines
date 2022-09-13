import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { destinazione } from '@models/interfDestinazione';
import { AirRoutes } from '@models/Routes';
import { RoutesmanagerserviceService } from '@services/routesmanagerservice.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit,AfterViewInit {
   da!: destinazione;
   a!: destinazione;
   dal!: Date;
   al!: Date;

  constructor() {}
  routeManager = inject(RoutesmanagerserviceService);

  rotte: AirRoutes[] = [];

  ngOnInit(): void {

this.rotte = this.routeManager.getResults();
console.log(this.rotte.length);

let _temp = this.routeManager.getparameters();


this.da = _temp.da;
this.a = _temp.a;
this.dal = _temp.dal;
this.al = _temp.dal;
  }
  ngAfterViewInit(): void {


  }
}
