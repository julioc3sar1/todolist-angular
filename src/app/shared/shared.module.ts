import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastAlertComponent } from './components/toast-alert/toast-alert.component';



@NgModule({
  declarations: [
    ToastAlertComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToastAlertComponent
  ]
})
export class SharedModule { }
