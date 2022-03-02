import { TestBed } from '@angular/core/testing';

import { MyNavigationService } from './my-navigation.service';

describe('MyNavigationService', () => {
  let service: MyNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
