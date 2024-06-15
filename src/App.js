import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import CreateTodoButton from "./CreateTodoButton";
import TodoItem from "./TodoItem";

const defaultTodos = [
  {
    text: "Si haces todo lo que los demás hacen en los negocios, vas a perder.",
    completed: true,
  },
  {
    text: "La única manera de estar realmente por delante, es ser diferente",
    completed: false,
  },
  {
    text: "Los grandes logros son impulsados, no tanto por la búsqueda del éxito, sino por el miedo al fracaso",
    completed: false,
  },
  {
    text: "Tienes que creer en lo que haces para obtener lo que quieres",
    completed: false,
  },
  {
    text: "Tienes que creer en lo que haces para obtener lo que quieres",
    completed: false,
  },
];
const App = () => {
  return (
    <>
      <TodoCounter total={10} completed={5} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};

export default App;
