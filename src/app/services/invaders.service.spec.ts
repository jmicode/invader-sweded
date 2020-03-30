import { TestBed } from '@angular/core/testing';

import { InvadersService } from './invaders.service';

describe('InvadersService', () => {
  let service: InvadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
