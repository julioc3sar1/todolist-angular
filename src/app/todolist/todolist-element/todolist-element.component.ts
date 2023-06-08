import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/todolist';
@Component({
  selector: 'app-todolist-element',
  templateUrl: './todolist-element.component.html',
  styleUrls: ['./todolist-element.component.scss']
})
export class TodolistElementComponent {
  @Input() task!: Task
  completed: boolean = true
  editable: boolean = false

  changeTaskStatus() {
    console.log(this.completed)
  }

  editTask(element: HTMLElement) {
    console.log(element)
    element.contentEditable = 'true'
    this.editable = true
  }

  updateTask(element: any, event: any) {
    console.log(event)
    event.preventDefault();
    // console.log('dale')
    const text = element.innerText
    element.innerText = text.replace(/[\r\n]/gm, '')

    element.contentEditable = 'false'
    this.editable = false
  }
}
