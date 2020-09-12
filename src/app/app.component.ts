import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public title = environment.projectTitle;
  public currency: number;

  public ngOnInit(): void {
    this.currency = 1;
  }
}
