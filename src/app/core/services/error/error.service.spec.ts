import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
  });
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
