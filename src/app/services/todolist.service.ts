import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
