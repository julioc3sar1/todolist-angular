import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastAlertComponent } from './components/toast-alert/toast-alert.component';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';



@NgModule({
  declarations: [
    ToastAlertComponent,
    DialogAlertComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToastAlertComponent,
    DialogAlertComponent
  ]
})
export class SharedModule { }
