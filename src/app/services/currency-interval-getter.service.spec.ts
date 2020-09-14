import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Rate } from '@app/models/rate';
import { CurrencyGetterService } from '@app/services/currency-getter.service';
import { environment } from '@env/environment';

import { CurrencyIntervalGetterService } from './currency-interval-getter.service';

describe('CurrencyIntervalGetterService', () => {
  let service: CurrencyIntervalGetterService;

  beforeEach(() => {
    const getter = jasmine.createSpyObj(
      'CurrencyGetterService', { get: of(new Rate(99, 'test')) }
    );
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: CurrencyGetterService, useValue: getter },
      ]
    });
    service = TestBed.inject(CurrencyIntervalGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run the getter periodically', fakeAsync(() => {
    let rate: Rate;
    const spy = TestBed.inject(CurrencyGetterService);
    const s = service.get('EUR').subscribe(data => rate = data);
    tick();
    expect(rate.value).toEqual(99);
    expect(spy.get).toHaveBeenCalledTimes(1);
    rate = null;
    tick(environment.currencyUpdateInterval);
    expect(rate.value).toEqual(99);
    expect(spy.get).toHaveBeenCalledTimes(2);
    s.unsubscribe();
  }));
});
