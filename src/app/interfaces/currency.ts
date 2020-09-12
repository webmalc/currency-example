import { Observable } from 'rxjs';

import { Rate } from '@app/models/rate';

// The currency getter interface
export interface CurrencyGetter {
    get(): Observable<Rate>;
}
