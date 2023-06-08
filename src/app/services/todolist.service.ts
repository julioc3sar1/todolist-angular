import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllTodoList() {
    return this.http.get('https://dummyjson.com/todos')
  }

  public addTask(task: Task) {
    return this.http.post('https://dummyjson.com/todos/add', task)
  }

}
