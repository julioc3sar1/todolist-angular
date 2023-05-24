import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Task } from "src/app/models/todolist";

export const selectTodolist = createFeatureSelector<ReadonlyArray<Task>>('todolist')