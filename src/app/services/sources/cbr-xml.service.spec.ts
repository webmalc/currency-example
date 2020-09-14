import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rate } from '@app/models/rate';
import { HttpGetterService } from '@app/services/http-getter.service';

import { CbrXmlService } from './cbr-xml.service';

describe('CbrXmlService', () => {
  let service: CbrXmlService;

  beforeEach(() => {

    const getter = jasmine.createSpyObj(
      'HttpGetterService', {
      get: of(
        `<App>
            <Valute>
              <CharCode>EUR</CharCode>
              <Value>34.5</Value>
            </Valute>
          </App>`
      )
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpGetterService, useValue: getter },
      ]
    });
    service = TestBed.inject(CbrXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a rate', () => {
    const spy = TestBed.inject(HttpGetterService);
    const s = service.get('EUR').subscribe((rate: Rate) => {
      expect(rate.value).toEqual(34.5);
      expect(spy.get).toHaveBeenCalledTimes(1);
    });
  });
});
