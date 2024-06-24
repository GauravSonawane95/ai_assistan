import { TestBed } from '@angular/core/testing';

import { GeneralSeviceService } from './general-sevice.service';

describe('GeneralSeviceService', () => {
  let service: GeneralSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
