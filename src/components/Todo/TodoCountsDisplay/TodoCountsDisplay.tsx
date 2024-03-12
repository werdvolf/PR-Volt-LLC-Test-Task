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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        textAlign: "center",
        minHeight: "100%",
      }}
    >
      <p style={{ fontSize: "14px", margin: "10px 0" }}>
        All: {all} Completed: {completed} Not Completed: {notCompleted}
      </p>
    </div>
  )
}

export default TodoCountsDisplay
