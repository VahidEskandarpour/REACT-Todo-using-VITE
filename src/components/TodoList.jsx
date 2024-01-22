import { useTodos } from "../context/todosContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();
  return (
    <ul className="border-4 border-white divide-y-4 divide-white h-full overflow-y-auto rounded-md overflow-x-hidden">
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
