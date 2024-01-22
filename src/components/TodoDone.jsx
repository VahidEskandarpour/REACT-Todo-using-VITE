import { useState } from "react";
import { useTodos } from "../context/todosContext";

function TodoDone({ todo }) {
  const { todos, setTodos } = useTodos();
  const [isMoved, setIsMoved] = useState(todo.done);

  function handleDoneTodo(todo) {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, done: !t.done } : t
    );
    setIsMoved(() => !isMoved);
    setTodos(updatedTodos);
  }

  return (
    <div
      className={`relative bg-gray-600 shadow-neomorphism-boxShadow rounded-[25px] w-[50px] h-[20px] transition-all duration-1000 `}
      onClick={() => handleDoneTodo(todo)}
    >
      <div
        className={`absolute left-0 rounded-full h-full transition-all duration-1000 ${
          isMoved ? "w-full  bg-green-600" : "w-[20px]"
        }`}
      ></div>
      <button
        className={`flex justify-center text-xs text-green-600 absolute w-[15px] h-[15px] bg-white rounded-full transition-all ease-in duration-[0.5s] top-[2px] ${
          isMoved ? "left-[32px] rotate-[360deg]" : "left-[4px]"
        }`}
      ></button>
    </div>
  );
}

export default TodoDone;
