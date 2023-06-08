export interface TodolistState {
    loading: boolean,
    newTaskDescription: String,
    todolist: TodoList,
}
export interface Task {
    id: string,
    todo: string,
    completed: boolean,
    userId: number
}

export interface TodoList {
    todos: Task[],
    total: number,
    skip: number,
    limit: number
}
