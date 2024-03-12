import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./slices/todo"
import { TODO_LOCAL_STORAGE_KEY } from "../constants"

const preloadedState = {
  todos: JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE_KEY) || "[]"),
}

export const store = configureStore({
  reducer: itemReducer,
  preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
