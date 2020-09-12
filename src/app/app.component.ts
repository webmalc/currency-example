import { Component, OnInit } from '@angular/core';
import { Rate } from '@app/models/rate';
import { CurrencyIntervalGetterService } from '@app/services/currency-interval-getter.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public readonly title = environment.projectTitle;
  public rate: Rate;

  public constructor(
    private readonly currencyIntervalGetter: CurrencyIntervalGetterService
  ) { }

  public ngOnInit(): void {
    this.currencyIntervalGetter.get().subscribe(
      (rate: Rate) => { this.rate = rate; }
    );
  }
}
