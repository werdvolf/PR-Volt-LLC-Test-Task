import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { InitialState, Todo } from "./types"
import { TODO_LOCAL_STORAGE_KEY } from "../../constants"

const initialState: InitialState = {
  todos: [],
}

const updateLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
      updateLocalStorage(state.todos)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)
      state.todos.splice(index, 1)
      updateLocalStorage(state.todos)
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.status = !todo.status
        updateLocalStorage(state.todos)
      }
    },
  },
})

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions

export default todoSlice.reducer
