import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodolistElementComponent } from './todolist-element/todolist-element.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodolistElementComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule
  ]
})
export class TodolistModule { }
