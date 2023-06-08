import { createAction, createActionGroup, props } from "@ngrx/store";
import { Task, TodoList } from "src/app/models/todolist";
import { emptyProps } from "@ngrx/store";

export const TodoListActions = createActionGroup({
    source: 'Todolist',
    events: {
        'Load all Todolist': emptyProps(),
        'Add TodoList': props<{ task: Partial<Task> }>(),
        'Update TodoList': props<{ task: Task }>(),
    }
})

export const TodolistApiActions = createActionGroup({
    source: 'Todolist API',
    events: {
        'Todolist Loaded Success': props<{ todolist: TodoList }>(),
        'Todolist Added Success': props<{ task: Task }>(),
    }
})