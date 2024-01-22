import AddButton from "./AddButton";
import ClearAllTodos from "./ClearAllTodos";
import { useTodos } from "../context/todosContext";

function TodoAdd() {
  const { todos, handleSubmit, newTodo, setNewTodo } = useTodos();

  return (
    <form className="px-5 relative" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center mb-3 text-green-500 font-RubikDoodleShadow">
        BEST TODO APP
      </h2>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          className="w-full rounded-lg p-4 focus:outline-none text-2xl shadow-neomorphism"
          placeholder="ADD TODO..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <AddButton type="submit" />
      </div>
      <div className="w-full h-[40px]">
        {todos.length > 0 && <ClearAllTodos />}
      </div>
    </form>
  );
}

export default TodoAdd;
