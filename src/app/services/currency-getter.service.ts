import { Observable, onErrorResumeNext } from 'rxjs';
import { take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { CurrencyGetter } from '@app/interfaces/currency';
import { Rate } from '@app/models/rate';
import { CbrJSONService } from '@app/services/sources/cbr-json.service';
import { CbrXmlService } from '@app/services/sources/cbr-xml.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyGetterService {

  private readonly sources: CurrencyGetter[] = [];

  public constructor(
    private readonly crbJson: CbrJSONService,
    private readonly cbrXml: CbrXmlService,
  ) {
    this.sources.push(crbJson);
    this.sources.push(cbrXml);
  }

  // Returns the rates from the sources
  public get(): Observable<Rate> {
    return onErrorResumeNext(...this.getObservables())
      .pipe(take(1)) as Observable<Rate>;
  }

  // Returns observables from the sources
  private getObservables(): Observable<Rate>[] {
    const observables: Observable<Rate>[] = [];
    this.sources.forEach(source => {
      observables.push(source.get());
    });

    return observables;
  }
}
