import './CreateTodoButton.css';
function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" 
    onClick={(event) => {
      console.log('click')
      console.log(event.target)
    }}
    >
      +
    </button>
  );
}

export { CreateTodoButton }