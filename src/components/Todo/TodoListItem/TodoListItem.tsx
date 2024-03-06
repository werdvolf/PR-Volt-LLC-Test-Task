import Checkbox from "@mui/material/Checkbox"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import IconButton from "@mui/material/IconButton"
import ClearIcon from "@mui/icons-material/Clear"

import { Todo } from "../../../store/slices/types"

interface TodoProps {
  todo: Todo
  onDelete: (id: string) => void
  onStatusChange: (id: string) => void
}

const TodoListItem = ({ todo, onDelete, onStatusChange }: TodoProps) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple
          checked={todo.status}
          onChange={() => onStatusChange(todo.id)}
        />
      </ListItemIcon>
      <ListItemText
        onClick={() => onStatusChange(todo.id)}
        sx={{
          textDecoration: todo.status ? "line-through" : "none",
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
            color: "blue",
          },
        }}
        primary={todo.text}
      />
      <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
        <ClearIcon />
      </IconButton>
    </ListItem>
  )
}
export default TodoListItem
