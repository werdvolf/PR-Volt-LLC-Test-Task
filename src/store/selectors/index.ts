import { RootState } from ".."

export const selectTodo = (state: RootState) => state.todos

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
