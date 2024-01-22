import TodoButtons from "./TodoButtons";

function TodoItem({ todo, index }) {
  return (
    <li
      className={`flex justify-between items-center p-4 divide-y-0 rounded-s hover:bg-[#b4b4b4] ${
        todo.done &&
        "bg-gradient-to-r from-my-gradientFROM to-my-gradientTO hover:bg-neomorphism"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <span
          className={`flex justify-center items-center border-2 text-slate-900 text-l border-white w-[20px] h-[20px] rounded-full text-xs`}
        >
          {index + 1}
        </span>
        <p className="font-bold">{todo.title}</p>
      </div>
      <TodoButtons todo={todo} />
    </li>
  );
}

export default TodoItem;
