export type Todo = {
  id: string
  text: string
  status: boolean
}

export interface InitialState {
  todos: Todo[]
}
