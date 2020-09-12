import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlParserService {

  // Returns a value by the path
  public getValue(data: string, path: string): number {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'application/xml');
    const nodes = xml.evaluate(
      path, xml, null, XPathResult.ANY_TYPE, null
    );
    const result = nodes.iterateNext().textContent.replace(',', '.');

    return +result;
  }
}
