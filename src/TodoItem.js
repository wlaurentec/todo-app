
const TodoItem = (props) => {
  return (
    <li>
      <span>V</span>
      <span>{props.text}</span>
      <span>X</span>
    </li>
  )
}

export default TodoItem