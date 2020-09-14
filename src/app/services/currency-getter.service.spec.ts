
import { of, throwError } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rate } from '@app/models/rate';
import { CbrJSONService } from '@app/services/sources/cbr-json.service';
import { CbrXmlService } from '@app/services/sources/cbr-xml.service';
import { InvalidSourceService } from '@app/services/sources/invalid-source.service';

import { CurrencyGetterService } from './currency-getter.service';

describe('CurrencyGetterService', () => {
  let service: CurrencyGetterService;

  beforeEach(() => {

    const jsonGetter = jasmine.createSpyObj(
      'CbrJSONService', { get: of(new Rate(99, 'json')) }
    );
    const xmlGetter = jasmine.createSpyObj(
      'CbrXmlService', { get: of(new Rate(11, 'xml')) }
    );
    const invalidGetter = jasmine.createSpyObj(
      'InvalidSourceService', { get: throwError(new Error('error')) }
    );

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: CbrJSONService, useValue: jsonGetter },
        { provide: CbrXmlService, useValue: xmlGetter },
        { provide: InvalidSourceService, useValue: invalidGetter },
      ]
    });
    service = TestBed.inject(CurrencyGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the result from the second source (json)', () => {
    service.get('EUR').subscribe((result: Rate) => {
      expect(result.value).toEqual(99);
      expect(result.source).toEqual('json');
    });
  });
});
