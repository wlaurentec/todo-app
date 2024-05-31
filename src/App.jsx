import { TodoCounter } from "./TodoCounter.jsx";
import { TodoSearch } from "./TodoSearch.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { CreateTodoButton } from "./CreateTodoButton.jsx";
import React from "react";

// const defaultTodos = [
//   {id: Math.floor(Math.random() * 1000000), text: 'Aprender MongoDB', completed: true},
//   {id: Math.floor(Math.random() * 1000000), text: 'Aprender GraphQL', completed: false},
//   {id: Math.floor(Math.random() * 1000000), text: 'Aprender React', completed: false},
//   {id: Math.floor(Math.random() * 1000000), text: 'Aprender JavaScript', completed: true},
// ]

// localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));
// localStorage.removeItem('todos_v1');

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
}
function App() {
  const [todos, saveTodos] = useLocalStorage("todos_v1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchValueFiltered = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const competeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  console.log("Los valores ingresados son:", searchValue);

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchValueFiltered.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => competeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            // onDelete={() => setTodos(todos.filter(t => t.id !== todo.id))}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
