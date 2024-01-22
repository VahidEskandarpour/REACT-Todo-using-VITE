/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const TodosContext = createContext();

function TodosProvider({ children }) {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(storedTodos);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function handleClearAllTodos() {
    const confirmToDeleteAll = window.confirm(
      "Are you sure to delete all of your todos ?"
    );

    if (confirmToDeleteAll) {
      setNewTodo("");
      setTodos([]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!newTodo) return;
    const newTodoItem = {
      id: crypto.randomUUID(),
      title: newTodo,
      done: false,
    };
    setNewTodo("");

    setTodos([...todos, newTodoItem]);
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        newTodo,
        setNewTodo,
        handleClearAllTodos,
        handleSubmit,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodosContext);

  if (!context) throw new Error("useTodos must be used within a TodosProvider");

  return context;
}

export { TodosProvider, useTodos };
