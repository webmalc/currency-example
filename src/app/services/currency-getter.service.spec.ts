import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CurrencyGetterService } from './currency-getter.service';

describe('CurrencyGetterService', () => {
  let service: CurrencyGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CurrencyGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
