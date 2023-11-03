import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css'],
})
export class CreateTodosComponent {
  todo: string = '';
  warningMessage: string = 'Add a todo before submitting ...';
  @ViewChild('addedTodo') createTodo: ElementRef;

  constructor() {}

  // updates the created todo for child component and resets the input or show warning message 
  addTodos(value: string) {
    if (value) {
      this.createTodo.nativeElement.value = '';
      this.todo = value;
    } else {
      alert(this.warningMessage);
    }
  }
}
