import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAlertStatus } from './store/selectors/alerts.selector';
import { Observable } from 'rxjs';
import { DialogAlertComponent } from './shared/components/dialog-alert/dialog-alert.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist-angular';
  alertIsVisible$!: Observable<boolean>
  @ViewChild(DialogAlertComponent) dialogAlert!: DialogAlertComponent

  constructor(
    private store: Store
  ) {

  }
  handleDialogTrigger(checked: boolean) {
    localStorage.setItem('showAgain', JSON.stringify(!checked))
  }

  ngOnInit() {
    this.alertIsVisible$ = this.store.select(selectAlertStatus)
  }

  ngAfterViewInit() {
    const showAgain = JSON.parse(localStorage.getItem('showAgain') || 'true')
    if (showAgain) this.dialogAlert.showDialog()
  }

}
