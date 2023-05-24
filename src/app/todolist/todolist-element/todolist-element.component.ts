import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/todolist';
@Component({
  selector: 'app-todolist-element',
  templateUrl: './todolist-element.component.html',
  styleUrls: ['./todolist-element.component.scss']
})
export class TodolistElementComponent {
  @Input() task!: Task
}
