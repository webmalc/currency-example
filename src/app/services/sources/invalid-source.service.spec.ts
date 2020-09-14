import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rate } from '@app/models/rate';
import { HttpGetterService } from '@app/services/http-getter.service';

import { InvalidSourceService } from './invalid-source.service';

describe('InvalidSourceService', () => {
  let service: InvalidSourceService;

  beforeEach(() => {
    const getter = jasmine.createSpyObj(
      'HttpGetterService', { get: of(new Rate(99, 'test')) }
    );
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpGetterService, useValue: getter },
      ]
    });
    service = TestBed.inject(InvalidSourceService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a rate', () => {
    const spy = TestBed.inject(HttpGetterService);
    const s = service.get('EUR').subscribe((rate: Rate) => {
      expect(rate.value).toEqual(99);
      expect(spy.get).toHaveBeenCalledTimes(1);
    });
  });
});
