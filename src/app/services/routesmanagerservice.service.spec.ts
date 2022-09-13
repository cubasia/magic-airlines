import { TestBed } from '@angular/core/testing';

import { RoutesmanagerserviceService } from './routesmanagerservice.service';

describe('RoutesmanagerserviceService', () => {
  let service: RoutesmanagerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesmanagerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
