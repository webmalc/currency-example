import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CbrJSONService } from './cbr-json.service';

describe('CbrJSONService', () => {
  let service: CbrJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CbrJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
