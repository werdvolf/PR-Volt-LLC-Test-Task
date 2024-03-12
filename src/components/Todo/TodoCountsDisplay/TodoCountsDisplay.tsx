interface TodoCountsDisplayProps {
  all: number
  completed: number
  notCompleted: number
}

const TodoCountsDisplay = ({
  all,
  completed,
  notCompleted,
}: TodoCountsDisplayProps) => {
  const countStyle = {
    fontSize: "14px",
    margin: "10px 0",
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p style={countStyle}>
        All: {all} Completed: {completed} Not Completed: {notCompleted}
      </p>
    </div>
  )
}

export default TodoCountsDisplay
