import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { CurrencyGetter } from '@app/interfaces/currency';
import { Rate } from '@app/models/rate';
import { HttpGetterService } from '@app/services/http-getter.service';
import { XmlParserService } from '@app/services/xml-parser.service';
import { environment } from '@env/environment';

// CbrXmlService gets rates from the CBR XML source
@Injectable({
  providedIn: 'root'
})
export class CbrXmlService implements CurrencyGetter {

  private readonly id = 'cbrXml';
  private readonly url = environment.currencySources[this.id];

  public constructor(
    private readonly parser: XmlParserService,
    private readonly getter: HttpGetterService
  ) { }

  // Returns the rates
  public get(): Observable<Rate> {
    return this.getter.get(this.url, true).pipe(
      map((data: string) => {
        const code = environment.currencyCode;
        const path = `//Valute[./CharCode[contains(text(), '${code}')]]/Value`;

        return new Rate(
          this.parser.getValue(data, path),
          this.id
        );
      })
    );
  }
}
