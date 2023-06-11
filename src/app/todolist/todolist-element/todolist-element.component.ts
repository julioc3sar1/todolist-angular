import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { Task } from 'src/app/models/todolist';
import { Store } from '@ngrx/store';
import { TodoListActions } from 'src/app/store/actions/todolist.actions';
import { TodolistService } from 'src/app/services/todolist.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-todolist-element',
  templateUrl: './todolist-element.component.html',
  styleUrls: ['./todolist-element.component.scss']
})
export class TodolistElementComponent {
  @Input() task!: Task

  completed: boolean = true
  editable: boolean = false
  todoSuscription$!: Subject<HTMLElement>

  constructor(
    private store: Store,
    private el: ElementRef,
    private todolistService: TodolistService
  ) {
    this.todoSuscription$ = this.todolistService.somethingClicked$
  }

  changeTaskStatus() {
    console.log(this.completed)
  }

  editTodo(element: HTMLElement) {
    this.todolistService.somethingClicked$.next(element)
    this.editable = true
    element.contentEditable = 'true'
    element.focus()
  }

  updateTodo(element: any, event: any) {
    event.preventDefault();
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

    this.todoSuscription$.subscribe(res => {
      if (!this.el.nativeElement.contains(res)) this.editable = false
      res.contentEditable = 'false'
    })

    this.completed = this.task.completed
  }

  ngOnDestroy() {
    // this.todoSuscription$.unsubscribe()
  }
}
