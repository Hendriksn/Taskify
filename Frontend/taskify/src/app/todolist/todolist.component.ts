import { Component, inject } from '@angular/core';
import { Todo } from '../reducers/todo';
import {Store } from '@ngrx/store';
import {State} from "./../reducers/index";
import * as actions from "../reducers/todolist.actions";
import { Observable, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { selectTodolist } from '../reducers/todolist.selectors';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  store = inject<Store<State>>(Store);
  todoText = "";
  $todos: Observable<Todo[]> = this.store.select(selectTodolist)
                                  
  editMode: boolean = false;
  updateTodoIndex = -1


  constructor(){
    this.store.subscribe((state)=> {
      this.todoText = state.todolistState.todoText;
      this.editMode = state.todolistState.editMode;
      this.updateTodoIndex = state.todolistState.updateTodoIndex;
    });
  }



changeTodoText(event: Event){
  this.todoText = (event.target as HTMLInputElement).value
}

  addTodo(){
    const todo: Todo = {
      text: this.todoText,
      done: false,
    };

    this.store.dispatch(actions.addTodo({todo}));
  }

 editTodo(todoIndex: number){
    this.store.dispatch(actions.editTodo({todoIndex}))
  }
  


  updateTodo(){
    this.store.dispatch(actions.updateTodo({
      todoText: this.todoText}));
  }

  removeTodo(todoIndex: number){
    this.store.dispatch(actions.removeTodo({todoIndex}))  
  }
}

