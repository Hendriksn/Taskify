import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo";

export const addTodo = createAction("[Todolist] Add Todo", props<{todo: Todo}>());
export const removeTodo = createAction("[Todolist] Remove Todo", props<{todoIndex: number}>());
export const editTodo= createAction("[Todolist] Edit Todo", props<{todoIndex: number}>());
export const updateTodo = createAction("[Todolist] Update Todo", props<{todoText: string,}>());