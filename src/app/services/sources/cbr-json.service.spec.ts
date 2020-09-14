import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rate } from '@app/models/rate';
import { HttpGetterService } from '@app/services/http-getter.service';

import { CbrJSONService } from './cbr-json.service';

describe('CbrJSONService', () => {
  let service: CbrJSONService;

  beforeEach(() => {
    const getter = jasmine.createSpyObj(
      'HttpGetterService', {
      get: of({ Valute: { EUR: { Value: 35.6 } } })
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpGetterService, useValue: getter },
      ]
    });
    service = TestBed.inject(CbrJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a rate', () => {
    const spy = TestBed.inject(HttpGetterService);
    const s = service.get('EUR').subscribe((rate: Rate) => {
      expect(rate.value).toEqual(35.6);
      expect(spy.get).toHaveBeenCalledTimes(1);
    });
  });
});
