import { FiTrash2 } from "react-icons/fi";
import TodoDone from "./TodoDone";
import { useTodos } from "../context/todosContext";

function TodoButtons({ todo }) {
  const { todos, setTodos } = useTodos();
  function handleDeleteTodo(id) {
    const confirmToDelete = window.confirm(
      `Are you sure to delete "${todo.title}" todo ?`
    );

    if (confirmToDelete) setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className={`flex justify-between items-center gap-x-4 `}>
      <div>
        <TodoDone todo={todo} />
      </div>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="hover:animate-shake"
      >
        <FiTrash2 size={24} className="hover:text-green-600" />
      </button>
    </div>
  );
}

export default TodoButtons;
