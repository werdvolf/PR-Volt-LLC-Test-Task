import TodoList from "./TodoList/TodoList"
import TodoCountsDisplay from "./TodoCountsDisplay/TodoCountsDisplay"
import TextInput from "../UI/TextInput/TextInput"
import Button from "../UI/Button/Button"
import Dropdown from "../UI/Dropdown/Dropdown"

import Typography from "@mui/material/Typography"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../store"
import { selectTodo, selectTodoCounts } from "../../store/selectors"
import { addTodo, removeTodo, changeTodoStatus } from "../../store/slices/todo"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

function Todo() {
  const dispatch = useDispatch<AppDispatch>()
  const todos = useSelector(selectTodo)
  const { all, completed, notCompleted } = useSelector(selectTodoCounts)
  const [todoText, setTodoText] = useState("")
  const [sortOption, setSortOption] = useState("")
  const sortOptions = ["All", "Completed", "Not Completed"]

  const handleAdd = (text: string) => {
    setTodoText("")
    const newItem = {
      id: uuidv4(),
      text: text,
      status: false,
    }
    dispatch(addTodo(newItem))
  }

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id))
  }

  const handleStatusChange = (id: string) => {
    dispatch(changeTodoStatus(id))
  }

  return (
    <>
      <Typography variant="h3">ToDo`s List</Typography>
      <TextInput
        label="Write what you want Todo"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        sx={{ marginBottom: "10px", width: "100%" }}
        InputProps={{
          endAdornment: (
            <Button
              buttonTitle="Create"
              onClick={() => handleAdd(todoText)}
              disabled={todoText.length <= 0}
            />
          ),
        }}
      ></TextInput>
      <Dropdown
        label={"Sort Options"}
        value={sortOption}
        options={sortOptions}
        handleChange={(event) => setSortOption(event.target.value as string)}
      ></Dropdown>
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
        sortOption={sortOption}
      ></TodoList>
      <TodoCountsDisplay
        all={all}
        completed={completed}
        notCompleted={notCompleted}
      ></TodoCountsDisplay>
    </>
  )
}

export default Todo
