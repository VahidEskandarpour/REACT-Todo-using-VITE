import { useTodos } from "../context/todosContext";

function TodoFooter() {
  const { todos } = useTodos();
  const doneTodo = todos.filter((todo) => todo.done === true).length;

  return (
    <footer className="absolute p-2 border-t-4 border-white bottom-0 w-full flex justify-around items-center text-sm">
      <p className="text-blue-500">
        {todos.length}
        &nbsp;
        {todos.length > 1 ? "Todos" : "Todo"}
      </p>
      <p className="text-red-500">
        {todos.filter((todo) => todo.done === false).length} must done
      </p>
      <p className="text-green-500">
        {doneTodo > 0
          ? doneTodo === todos.length
            ? "👍"
            : `${doneTodo} done`
          : "🖐😏"}
      </p>
    </footer>
  );
}

export default TodoFooter;
