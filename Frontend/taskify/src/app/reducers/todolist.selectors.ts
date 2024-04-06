import {createSelector } from "@ngrx/store";
import { State } from ".";
import { TodolistState } from "./todolist.reducer";

export const selectTodolist = createSelector((state: State) => state.todolistState,
    (todolistState: TodolistState) => todolistState.todos
)