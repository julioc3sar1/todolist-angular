import { createReducer, on } from "@ngrx/store";
import { TodoListActions, TodolistApiActions } from "../actions/todolist.actions";
import { Task, TodoList } from "src/app/models/todolist";

export const initialState: { loading: boolean, todolist: TodoList } = { loading: false, todolist: {} as TodoList }

export const todolistReducer = createReducer(
    initialState,
    on(TodoListActions.loadAllTodolist, (_state) => {
        return { ..._state, loading: true }
    }),
    on(TodolistApiActions.todolistLoadedSuccess, (_state, { todolist }) => {
        return { ..._state, todolist, loading: false }
    })
)