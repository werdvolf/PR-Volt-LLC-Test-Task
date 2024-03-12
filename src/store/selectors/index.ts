import { RootState } from ".."
import { TODO_LOCAL_STORAGE_KEY } from "../../constants"

export const selectTodo = (state: RootState) => {
  const storedTodos = localStorage.getItem(TODO_LOCAL_STORAGE_KEY)
  const todos = storedTodos ? JSON.parse(storedTodos) : state.todos
  return todos
}

export const selectTodoCounts = (state: RootState) => {
  const all = state.todos.length

  const completed = state.todos.reduce(
    (count, todo) => (todo.status ? count + 1 : count),
    0,
  )

  const notCompleted = all - completed

  return {
    all,
    completed,
    notCompleted,
  }
}
