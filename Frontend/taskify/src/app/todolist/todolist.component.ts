import { Component, inject, signal } from '@angular/core';
import { Todo } from '../reducers/todo';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  todoText = signal("");
  todos = signal<Todo[]>([]);
  isEditMode = signal(false);
  updateTodoIndex = signal(-1);

  addTodo(){
    const todo: Todo = {text: this.todoText(), done: false};

    this.todos.set([...this.todos(), todo]);
    this.todoText.set("");
  }

  removeTodo(todoIndex: number){
    this.todos.set(this.todos().filter((todo, index)=> index != todoIndex));
  }

  editTodo(todoIndex: number){
    this.isEditMode.set(true);
    this.todoText.set(this.todos()[todoIndex].text)
    this.updateTodoIndex.set(todoIndex)
  }

  updateTodo(){
    const newTodos = [...this.todos()];
    newTodos[this.updateTodoIndex()] = {
      ...newTodos[this.updateTodoIndex()],
      text: this.todoText()
    }
    this.todos.set(newTodos);
    this.isEditMode.set(false);
    this.todoText.set("");
    this.updateTodoIndex.set(-1);
  }


  changeTodoText(event: Event){
    this.todoText.set((event.target as HTMLInputElement).value);
  }
}

