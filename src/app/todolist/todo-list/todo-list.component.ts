import { Component } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { Store } from '@ngrx/store';
import { TodoListActions } from 'src/app/store/actions/todolist.actions';
import { selectTodolist } from 'src/app/store/selectors/todolist.selector';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(
    private todoListService: TodolistService,
    private store: Store
  ) {

  }

  todolist$ = this.store.select(selectTodolist)

  ngOnInit() {
    // this.todoListService.getAllTodoList().subscribe(resp => {
    //   console.log(resp)
    // })
    this.store.dispatch(TodoListActions.loadAllTodolist())
  }
}
