import { createReducer, on } from "@ngrx/store";
import { TodoListActions, TodolistApiActions } from "../actions/todolist.actions";
import { Task, TodoList, TodolistState } from "src/app/models/todolist";

export const initialState: TodolistState = {
    loading: false,
    newTaskDescription: 'hola',
    todolist: {} as TodoList
}

export const todolistReducer = createReducer(
    initialState,
    on(TodoListActions.loadAllTodolist, (_state) => {
        return { ..._state, loading: true }
    }),
    on(TodolistApiActions.todolistLoadedSuccess, (_state, { todolist }) => {
        return { ..._state, todolist, loading: false }
    }),
    on(TodolistApiActions.todolistAddedSuccess, (_state, { task }) => {
        return {
            ..._state,
            newTaskDescription: '',
            todolist: {
                todos: [..._state.todolist.todos, ...[task]],
                total: _state.todolist.total + 1,
                skip: 0,
                limit: 30
            }
        }
    })
)