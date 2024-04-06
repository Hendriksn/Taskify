import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import {reducers, metaReducers} from "./reducers"
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TodolistStore } from './reducers/todolist.store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), TodolistStore, provideStore(reducers, {metaReducers}), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), connectInZone: true })]
};
