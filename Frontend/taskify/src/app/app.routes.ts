import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { GreeterComponent } from './greeter/greeter.component';

export const routes: Routes = [
    { path: "", component: TodolistComponent},
    { path: "greeter", component: GreeterComponent},

];
