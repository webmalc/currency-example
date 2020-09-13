import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Rate } from '@app/models/rate';
import { HttpGetterService } from '@app/services/http-getter.service';
import { environment } from '@env/environment';

// InvalidSourceService always return errors
@Injectable({
  providedIn: 'root'
})
export class InvalidSourceService {

  private readonly id = 'invalidSource';
  private readonly url = environment.currencySources[this.id];

  public constructor(private readonly getter: HttpGetterService) { }

  // Returns the rates
  public get(code: string): Observable<Rate> {
    return this.getter.get(this.url) as Observable<Rate>;
  }
}
