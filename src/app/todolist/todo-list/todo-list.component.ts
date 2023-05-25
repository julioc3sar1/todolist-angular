import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListActions } from 'src/app/store/actions/todolist.actions';
import { selectLoading, selectTodos } from 'src/app/store/selectors/todolist.selector';
import { Observable } from 'rxjs';
import { Task, TodoList } from 'src/app/models/todolist';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(
    private store: Store
  ) {

  }

  loading$!: Observable<boolean>
  todos$!: Observable<Task[]>

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading)
    this.todos$ = this.store.select(selectTodos)

    this.store.dispatch(TodoListActions.loadAllTodolist())
  }
}
