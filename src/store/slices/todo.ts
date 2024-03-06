import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { InitialState, Todo } from "./types"

const initialState: InitialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload)
      state.todos.splice(index, 1)
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.status = !todo.status
      }
    },
  },
})

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions

export default todoSlice.reducer
