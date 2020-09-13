import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpGetterService } from './http-getter.service';

describe('HttpGetterService', () => {
  let service: HttpGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpGetterService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
