import { Observable } from 'rxjs';
import { delay, retryWhen, shareReplay, take } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGetterService {

  public constructor(private readonly http: HttpClient) { }

  // Returns data by an HTTP request
  public get(url: string, options?: object): Observable<any> {
    return this.http.get(url, options).pipe(
      retryWhen(errors => errors.pipe(
        delay(environment.httpDelay), take(environment.httpRetry)
      )),
      shareReplay(),
    );
  }
}
