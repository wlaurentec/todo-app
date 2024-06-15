import "./TodoCounter.css"

const TodoCounter = ({ completed, total }) => {
  return (
    <h1>
      Haz completado {completed} de {total} tareas.
    </h1>
  );
};

export default TodoCounter;
