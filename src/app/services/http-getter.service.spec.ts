import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { environment } from '@env/environment';

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

  it('should make a request', fakeAsync(() => {
    const http = TestBed.inject(HttpTestingController);
    const url = 'https://example.com';
    const response = { test: 1 };

    const s = service.get(url).subscribe(data => {
      expect(data).toEqual(response);
    });
    const req = http.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush({ error: 'invalid_grant' }, {
      status: 401,
      statusText: 'Unauthorized'
    });
    tick(environment.httpDelay);

    const req2 = http.expectOne(url);
    req2.flush(response);
    s.unsubscribe();
  }));
});
