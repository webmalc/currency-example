import { TestBed } from '@angular/core/testing';

import { XmlParserService } from './xml-parser.service';

describe('XmlParserService', () => {
  let service: XmlParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a number by the path', () => {
    const data = '<app><value>14,55</value></app>';
    const path = '//value';
    expect(service.getValue(data, path)).toEqual(14.55);
  });
});
