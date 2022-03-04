import { TestBed } from '@angular/core/testing';

import { DateCalcService } from './date-calc.service';

describe('DateCalcService', () => {
  let service: DateCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
