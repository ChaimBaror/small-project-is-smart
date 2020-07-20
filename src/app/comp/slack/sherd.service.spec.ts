import { TestBed } from '@angular/core/testing';

import { SherdService } from './sherd.service';

describe('SherdService', () => {
  let service: SherdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SherdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
