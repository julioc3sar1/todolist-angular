import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  url: string = 'https://dummyjson.com'

  constructor(
    private http: HttpClient
  ) { }

  public getAllTodoList() {
    return this.http.get(`${this.url}/todos`)
  }

  public addTask(task: Task) {
    return this.http.post(`${this.url}/todos/add`, task)
  }

  public deleteTodo(todoId: string) {
    return this.http.delete(`${this.url}/todos/${todoId}`,)
  }

}
