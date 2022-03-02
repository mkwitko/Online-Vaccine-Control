import { TestBed } from '@angular/core/testing';

import { AllowService } from './allow.service';

describe('AllowService', () => {
  let service: AllowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
