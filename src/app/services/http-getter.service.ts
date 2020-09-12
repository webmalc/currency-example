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
  public get(
    url: string,
    isText: boolean = false
  ): Observable<object | string> {
    let response: Observable<object | string>;
    if (isText) {
      response = this.http.get(url, { responseType: 'text' });
    } else {
      response = this.http.get(url);
    }

    return response.pipe(
      retryWhen(errors => errors.pipe(
        delay(environment.httpDelay), take(environment.httpRetry)
      )),
      shareReplay(),
    );
  }
}
