import React from "react"
import List from "@mui/material/List"
import { Todo } from "../../../store/slices/types"
import TodoListItem from "../TodoListItem/TodoListItem"
import Divider from "@mui/material/Divider"
import { Typography } from "@mui/material"

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
      {filteredTodos.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxHeight: "350px",
            minHeight: "350px",
          }}
        >
          No todos available
        </Typography>
      ) : (
        <List
          sx={{
            width: "100%",
            overflowY: "auto",
            maxHeight: "350px",
            minHeight: "350px",
          }}
        >
          {filteredTodos.map((todo, index) => (
            <React.Fragment key={todo.id}>
              <TodoListItem
                todo={todo}
                onDelete={onDelete}
                onStatusChange={onStatusChange}
              />
              {index < filteredTodos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </>
  )
}
export default ItemList
