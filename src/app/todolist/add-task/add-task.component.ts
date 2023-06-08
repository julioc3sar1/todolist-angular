import { Component } from '@angular/core';
import { TodoListActions } from 'src/app/store/actions/todolist.actions';
import { Store } from '@ngrx/store';
import { selectTaskDescriptionValue } from 'src/app/store/selectors/todolist.selector';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskValue: String = ''

  constructor(
    private store: Store
  ) {

  }

  onAddTask(value: string) {
    console.log(value)
    const task = {
      todo: value,
      completed: false,
      userId: 5
    }

    this.store.dispatch(TodoListActions.addTodoList({ task }))

  }

  ngOnInit() {
    this.store.select(selectTaskDescriptionValue).subscribe(res => this.taskValue = res)
  }
}