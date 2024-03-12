export type Todo = {
  id: string
  text: string
  status: boolean
}

export type InitialStateTodosAmount = {
  all: number
  completed: number
  notCompleted: number
}

export interface InitialState {
  todos: Todo[]
}
