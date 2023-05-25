import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Task, TodoList } from "src/app/models/todolist";

export const selectTodolistFeature = createFeatureSelector<{ loading: boolean, todolist: TodoList }>('todolist')

export const selectLoading = createSelector(
    selectTodolistFeature,
    (state) => state.loading
)

export const selectTodos = createSelector(
    selectTodolistFeature,
    (state) => state.todolist.todos
)