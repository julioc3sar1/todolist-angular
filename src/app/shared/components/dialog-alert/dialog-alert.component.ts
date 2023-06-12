import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent {
  @ViewChild('dialog') dialog!: ElementRef
  title: string = ''

  showDialog() {
    this.dialog.nativeElement.showModal()
  }
  hideDialog() {
    this.dialog.nativeElement.close()
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
