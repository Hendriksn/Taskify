import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  todoText = "";
  todos: Todo[] = [];
  editMode: boolean = false;
  updateTodoIndex = -1

changeTodoText(event: Event){
  this.todoText = (event.target as HTMLInputElement).value
}

  addTodo(){
    this.todos.push({
      text: this.todoText,
      done: false
    })
    this.todoText= ""
  }

  editTodo(todoIndex: number){
    console.log("in edit")

      this.editMode = true; 
      this.todoText = this.todos[todoIndex].text;
      this.updateTodoIndex = todoIndex;
  }

  updateTodo(){
    this.todos[this.updateTodoIndex].text = this.todoText;
    this.todoText ="";
    this.editMode = false;
    this.updateTodoIndex = -1
  }

  removeTodo(todoIndext: number){
    
    this.todos.splice(todoIndext)
  }
}



export interface Todo{
  text: string;
  done: boolean;
}