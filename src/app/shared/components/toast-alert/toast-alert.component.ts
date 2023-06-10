import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAlertsFeature } from 'src/app/store/selectors/alerts.selector';
import { AlertActions } from 'src/app/store/actions/alerts.actions';
@Component({
  selector: 'app-toast-alert',
  templateUrl: './toast-alert.component.html',
  styleUrls: ['./toast-alert.component.scss']
})
export class ToastAlertComponent implements OnInit {

  toastTypes: any = {
    success: 'bg-green-700',
    error: 'bg-red-700',
    warning: 'bg-yellow-700',
    info: 'bg-blue-700'
  }

  toast: any = {
    status: 'success'
  }

  constructor(
    private store: Store
  ) {

  }

  closeAlert() {
    this.store.dispatch(AlertActions.hideAlert())
  }

  ngOnInit() {
    this.store.select(selectAlertsFeature).subscribe(res => {
      // console.log(this.toastTypes[404])
      this.toast.message = res.message
      this.toast.status = res.status === 400 ? 'error' : 'success'

      // setTimeout(() => this.store.dispatch(AlertActions.hideAlert()), 5000)
    })
  }
}
