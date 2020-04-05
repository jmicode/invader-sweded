import { TestBed } from '@angular/core/testing';

import { InvadersCitiesService } from './invaders-cities.service';

describe('InvadersCitiesService', () => {
  let service: InvadersCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvadersCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
