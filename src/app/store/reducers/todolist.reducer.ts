import { createReducer, on } from "@ngrx/store";
import { TodoListActions, TodolistApiActions } from "../actions/todolist.actions";
import { Task } from "src/app/models/todolist";

export const initialState: Task[] = []

export const todolistReducer = createReducer(
    initialState,
    on(TodolistApiActions.todolistLoadedSuccess, (_state, { todolist }) => todolist.todos)
)