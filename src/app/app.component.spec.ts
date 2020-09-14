import { of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Rate } from '@app/models/rate';
import { CurrencyIntervalGetterService } from '@app/services/currency-interval-getter.service';
import { environment } from '@env/environment';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const getter = jasmine.createSpyObj(
      'CurrencyIntervalGetterService', { get: of(new Rate(99, 'test')) }
    );
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: CurrencyIntervalGetterService, useValue: getter },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'currency-example'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(environment.projectTitle);
  });

  it('should show the rate', () => {
    const spy = TestBed.inject(CurrencyIntervalGetterService);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const rate = fixture.nativeElement.querySelector('p');
    expect(rate.innerHTML).toEqual('test: 99');
    expect(spy.get).toHaveBeenCalledTimes(1);
  });
});
