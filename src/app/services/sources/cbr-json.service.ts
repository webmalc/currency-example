import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { CurrencyGetter } from '@app/interfaces/currency';
import { Rate } from '@app/models/rate';
import { HttpGetterService } from '@app/services/http-getter.service';
import { environment } from '@env/environment';

// CbrJSONService gets rates from the CBR JSON source
@Injectable({
  providedIn: 'root'
})
export class CbrJSONService implements CurrencyGetter {

  private readonly id = 'cbrJson';
  private readonly url = environment.currencySources[this.id];

  public constructor(private readonly getter: HttpGetterService) { }

  // Returns the rates
  public get(): Observable<Rate> {
    return this.getter.get(this.url).pipe(
      map((data: any) => {
        return new Rate(data.Valute[environment.currencyCode].Value, this.id);
      })
    );
  }
}
