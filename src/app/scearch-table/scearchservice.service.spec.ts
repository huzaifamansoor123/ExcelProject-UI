import { TestBed } from '@angular/core/testing';

import { ScearchserviceService } from './scearchservice.service';

describe('ScearchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScearchserviceService = TestBed.get(ScearchserviceService);
    expect(service).toBeTruthy();
  });
});
