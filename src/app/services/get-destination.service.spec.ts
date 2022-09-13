import { TestBed } from '@angular/core/testing';

import { GetDestinationService } from './get-destination.service';

describe('GetDestinationService', () => {
  let service: GetDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
