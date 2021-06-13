import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DealerService } from './dealer.service';

describe('DealerService', () => {
  let service: DealerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
  });
    service = TestBed.inject(DealerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
