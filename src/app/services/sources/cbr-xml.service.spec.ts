import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CbrXmlService } from './cbr-xml.service';

describe('CbrXmlService', () => {
  let service: CbrXmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CbrXmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
