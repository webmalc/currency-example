import { TestBed } from '@angular/core/testing';

import { CurrencyIntervalGetterService } from './currency-interval-getter.service';

describe('CurrencyIntervalGetterService', () => {
  let service: CurrencyIntervalGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyIntervalGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
