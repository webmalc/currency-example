import { Observable, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Rate } from '@app/models/rate';
import { CurrencyGetterService } from '@app/services/currency-getter.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyIntervalGetterService {

  public constructor(private readonly getter: CurrencyGetterService) { }

  // Returns currency rates periodically
  public get(): Observable<Rate> {
    return timer(0, environment.currencyUpdateInterval).pipe(
      mergeMap(() => this.getter.get())
    );
  }
}
