import { useTodos } from "../context/todosContext";

function ClearAllTodos() {
  const { handleClearAllTodos } = useTodos();
  return (
    <button
      onClick={handleClearAllTodos}
      className="hover:w-[90px] hover:bg-green-600 hover:shadow-2xl transition-all duration-300 animate-fadeIn text-xs w-[75px] mt-2 bg-gray-900 text-white my-2 h-[20px] rounded-md text-center"
    >
      Clear All
    </button>
  );
}

export default ClearAllTodos;
