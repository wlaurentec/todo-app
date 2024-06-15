import "./TodoCounter.css"

const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="TodoCounter">
      Haz completado <span>{completed}</span> de <span>{total}</span> tareas.
    </h1>
  );
};

export default TodoCounter;
