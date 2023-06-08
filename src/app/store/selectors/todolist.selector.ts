import { state } from "@angular/animations";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Task, TodoList, TodolistState } from "src/app/models/todolist";

export const selectTodolistFeature = createFeatureSelector<TodolistState>('todolist')

export const selectLoading = createSelector(
    selectTodolistFeature,
    (state) => state.loading
)

export const selectTodos = createSelector(
    selectTodolistFeature,
    (state) => state.todolist.todos
)

export const selectTaskDescriptionValue = createSelector(
    selectTodolistFeature,
    (state) => state.newTaskDescription
)