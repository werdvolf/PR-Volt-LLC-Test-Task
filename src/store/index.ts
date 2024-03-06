import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./slices/todo"

export const store = configureStore({
  reducer: itemReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
