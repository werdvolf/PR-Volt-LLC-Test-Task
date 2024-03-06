import List from "@mui/material/List"
import { Todo } from "../../../store/slices/types"
import TodoListItem from "../TodoListItem/TodoListItem"

interface TodoListProps {
  todos: Todo[]
  sortOption: string
  onDelete: (id: string) => void
  onStatusChange: (id: string) => void
}

const ItemList = ({
  todos,
  sortOption,
  onDelete,
  onStatusChange,
}: TodoListProps) => {
  const filteredTodos = todos.filter((todo) => {
    if (sortOption === "Completed") {
      return todo.status
    } else if (sortOption === "Not Completed") {
      return !todo.status
    }
    return true // For "All" option
  })

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#DCDCDC",
          borderRadius: "15px",
          boxShadow: "5px 5px 5px #D3D3D3",
        }}
      >
        {filteredTodos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            ></TodoListItem>
          )
        })}
      </List>
    </>
  )
}
export default ItemList
