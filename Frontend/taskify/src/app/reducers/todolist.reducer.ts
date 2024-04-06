import { Todo } from "./todo";
import {createReducer, on } from "@ngrx/store";
import * as actions from "./todolist.actions";


const initialState: TodolistState = {
    todoText: '',
    todos: [],
    isEditMode: false,
    updateTodoIndex:-1
};

export interface TodolistState{
    todoText: string;
    todos: Todo[];
    isEditMode: boolean;
    updateTodoIndex: number;
};
                                            //hier übergibt man den initialen Zustand
export const todolistReducer = createReducer(initialState, 
                        //wir geben letzten State und als object bekommen wir das neue Todo rein und gibt TodolistState wieder zurück
    on(actions.addTodo, (todolistState, {todo}): TodolistState => {
        return {
            ...todolistState, 
            todos: [...todolistState.todos, todo]
        }
    }),
    on(actions.removeTodo,(todolistState, {todoIndex}): TodolistState => {
        return {
            ...todolistState,
            todos: todolistState.todos.filter((todo,index) => index != todoIndex)
        }
    }),
    on(actions.editTodo,(todolistState,{todoIndex}): TodolistState => {
        return{
            ...todolistState,
            isEditMode: true,
            todoText: todolistState.todos[todoIndex].text,
            updateTodoIndex: todoIndex
        }
    }),
    on(actions.updateTodo,(todolistState, {todoText}): TodolistState => {
        const newTodos = [...todolistState.todos];
        newTodos[todolistState.updateTodoIndex]= {
            ...newTodos[todolistState.updateTodoIndex],
            text: todoText
        };

        return{
            ...todolistState,
            todos: newTodos,
            isEditMode: false,
            todoText: "",
            updateTodoIndex: -1
        }
    }), 
);

