import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { TodolistState } from "./todolist.reducer";

export const TodolistStore = signalStore(
    withState<TodolistState>({
        todoText: '',
        todos: [],
        isEditMode: false,
        updateTodoIndex:-1,
    }),
    withMethods(({ ...store }) => ({
        addTodo:() => {
            const todo = { text: store.todoText(), done: false};

            patchState(store,(todolistState => ({
                ...todolistState,
                todoText: "",
                todos: [...todolistState.todos, todo],
                
            })));
        },
        removeTodo:(todoIndex: number) => {
            patchState(store,(todolistState)=> ({
                ...todolistState,
                todos: todolistState.todos.filter((todo, index) => index !=todoIndex),
            }));
        },
        editTodo:(todoIndex:number) => {
            patchState(store, (todolistState) => ({
                ...todolistState,
                isEditMode: true,
                todoText: todolistState.todos[todoIndex].text,
                updateTodoIndex: todoIndex,
            }))
        },
        updateTodo:() => {
            patchState(store, (todolistState) => {
                const newTodos = [...todolistState.todos];
                newTodos[todolistState.updateTodoIndex] = {
                    ...newTodos[todolistState.updateTodoIndex],
                    text: todolistState.todoText,
                };
                return {
                    ...todolistState,
                    todos: newTodos,
                    isEditMode: false,
                    todoText: "",
                    updateTodoIndex: -1
                };
            });
        },
    }))
);