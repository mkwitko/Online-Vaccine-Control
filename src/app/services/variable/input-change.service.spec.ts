import { TestBed } from '@angular/core/testing';

import { InputChangeService } from './input-change.service';

describe('InputChangeService', () => {
  let service: InputChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
