import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodolistElementComponent } from './todolist-element/todolist-element.component';
import { TaskSkeletonComponent } from './task-skeleton/task-skeleton.component';
import { AddTaskComponent } from './add-task/add-task.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent,
    TodolistElementComponent,
    TaskSkeletonComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule
  ]
})
export class TodolistModule { }
