import { createReducer, on } from "@ngrx/store";
import { TodolistApiActions } from "../actions/todolist.actions";
import { AlertActions } from "../actions/alerts.actions";
import { AlertState } from "src/app/models/alerts";

export const initialState: AlertState = {
    visible: false,
    status: null,
    message: null
}

export const alertsReducer = createReducer(
    initialState,
    on(AlertActions.hideAlert, (_state) => {
        return { ..._state, visible: false, message: null, status: null }
    }),
    on(TodolistApiActions.todolistAddedSuccess, (_state) => {
        return { ..._state, visible: true, message: 'Todo added successfully', code: 200 }
    }),
    on(TodolistApiActions.todolistDeletedSuccess, (_state) => {
        return { ..._state, visible: true, message: 'Todo deleted successfully', code: 200 }
    }),
    on(TodolistApiActions.todolistOperationFailed, (_state, { error }) => {
        console.log(error)
        return { ..._state, visible: true, message: error.message, status: 400 }
    })
)