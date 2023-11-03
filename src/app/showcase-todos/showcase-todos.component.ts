import { Component, Input, OnInit } from '@angular/core';
import { ShowcaseTodoTypes } from './showcase-todos.types';

@Component({
  selector: 'app-showcase-todos',
  templateUrl: './showcase-todos.component.html',
  styleUrls: ['./showcase-todos.component.css'],
})
export class ShowcaseTodosComponent implements OnInit {

  private LOCAL_STORAGE_KEY: string = 'todos';
  todoList: Array<ShowcaseTodoTypes.TodoItem> = [];
  todos: string = '';

  @Input()
  set todo(value: string) {
    if (value) {
      this.todoList.push({
        value: value,
        completed: false,
      });
      this.setLocalStorageItem();
    }
  }

  constructor() {}

  // intializes and get the todos from local storage 
  ngOnInit(): void {
    if (localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
      let list = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      let parsedTodoList = JSON.parse(list);
      this.todoList = [...parsedTodoList];
    }
  }

  // filter out all other todo items leaving the removed item and updates local storage 
  removeItem(removeItem: ShowcaseTodoTypes.TodoItem): void {
    this.todoList = this.todoList.filter(
      (todo) => todo.value != removeItem.value
    );
    this.setLocalStorageItem();
  }

  // sets todo as completed and updates the local storage 
  onComplete(complete: boolean, todo: ShowcaseTodoTypes.TodoItem): void {
    todo.completed = complete;
    this.setLocalStorageItem();
  }

  // sets the todo items in local storage
  setLocalStorageItem(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.todoList));
  }
}
