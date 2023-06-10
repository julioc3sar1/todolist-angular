import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/todolist';
import { Store } from '@ngrx/store';
import { TodoListActions } from 'src/app/store/actions/todolist.actions';
@Component({
  selector: 'app-todolist-element',
  templateUrl: './todolist-element.component.html',
  styleUrls: ['./todolist-element.component.scss']
})
export class TodolistElementComponent {
  @Input() task!: Task
  completed: boolean = true
  editable: boolean = false

  constructor(
    private store: Store
  ) {

  }
  changeTaskStatus() {
    console.log(this.completed)
  }

  editTodo(element: HTMLElement) {
    console.log(element)
    this.editable = true
    element.contentEditable = 'true'
  }

  updateTodo(element: any, event: any) {
    console.log(event)
    event.preventDefault();
    // console.log('dale')
    const text = element.innerText
    element.innerText = text.replace(/[\r\n]/gm, '')

    element.contentEditable = 'false'
    this.editable = false
  }

  deleteTodo() {
    const todoId = this.task.id
    this.store.dispatch(TodoListActions.deleteTodoList({ todoId }))
  }

  ngOnInit() {
    this.completed = this.task.completed
  }
}
