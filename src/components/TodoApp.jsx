import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

function TodoApp() {
  return (
    <div className="relative bg-neomorphism shadow-neomorphism rounded-[50px] h-[550px] w-[500px]">
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </div>
  );
}

export default TodoApp;
