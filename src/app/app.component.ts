import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAlertStatus } from './store/selectors/alerts.selector';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist-angular';
  alertIsVisible$!: Observable<boolean>

  constructor(
    private store: Store
  ) {

  }

  ngOnInit() {
    this.alertIsVisible$ = this.store.select(selectAlertStatus)
  }

}
