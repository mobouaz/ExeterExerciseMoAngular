import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CustomercenterService } from './customercenter.service';

describe('CustomercenterService', () => {
  let service: CustomercenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CustomercenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
