import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
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
}