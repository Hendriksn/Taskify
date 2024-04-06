import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { todolistReducer, TodolistState } from './todolist.reducer';

export interface State {
  todolistState: TodolistState;
}

export const reducers: ActionReducerMap<State> = {
  todolistState: todolistReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
