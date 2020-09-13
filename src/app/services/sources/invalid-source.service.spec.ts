import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InvalidSourceService } from './invalid-source.service';

describe('InvalidSourceService', () => {
  let service: InvalidSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InvalidSourceService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
