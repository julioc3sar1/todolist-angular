import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { TodolistService } from "src/app/services/todolist.service";

@Injectable()
export class TodolistEffects {
    constructor(
        private actions$: Actions,
        private todolistService: TodolistService
    ) {

    }

    $loadTodolist = createEffect(() => this.actions$.pipe(
        ofType('[Todolist] Load all Todolist'),
        exhaustMap(() => this.todolistService.getAllTodoList().pipe(
            map(todolist => ({ type: '[Todolist API] Todolist Loaded Success', todolist })),
            catchError(() => EMPTY)
        ))
    ))

    $addTodolist = createEffect(() => this.actions$.pipe(
        ofType('[Todolist] Add TodoList'),
        exhaustMap(({ task }) => this.todolistService.addTask(task).pipe(
            map(task => ({ type: '[Todolist API] Todolist Added Success', task })),
            catchError((error) => of({ type: '[Todolist API] Todolist Operation Failed', error }))
        ))
    ))

    $deleteTodolist = createEffect(() => this.actions$.pipe(
        ofType('[Todolist] Delete TodoList'),
        exhaustMap(({ todoId }) => this.todolistService.deleteTodo(todoId).pipe(
            map(task => ({ type: '[Todolist API] Todolist Deleted Success', task })),
            catchError((error) => of({ type: '[Todolist API] Todolist Operation Failed', error }))
        ))

    ))
}