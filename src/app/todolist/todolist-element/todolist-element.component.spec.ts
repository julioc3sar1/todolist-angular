import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistElementComponent } from './todolist-element.component';

describe('TodolistElementComponent', () => {
  let component: TodolistElementComponent;
  let fixture: ComponentFixture<TodolistElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistElementComponent]
    });
    fixture = TestBed.createComponent(TodolistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
