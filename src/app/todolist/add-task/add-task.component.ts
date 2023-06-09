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
  taskValue: string = ''

  constructor(
    private store: Store
  ) {

  }

  updateTaskDescriptionState(){
    this.store.dispatch(TodoListActions.updateNewTodo({taskDescription:this.taskValue}))
  }

  addNewTodo() {
    const cleanValue = this.taskValue.trim()
    
    if(cleanValue.length === 0) return

    const task = {
      todo: this.taskValue,
      completed: false,
      userId: 5
    }

    this.store.dispatch(TodoListActions.addTodoList({ task }))

  }

  ngOnInit() {
    this.store.select(selectTaskDescriptionValue).subscribe(res => this.taskValue = res)
  }
}