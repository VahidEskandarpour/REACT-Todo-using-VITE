import React from "react";
import TodoAdd from "./TodoAdd";
import Todos from "./Todos";

function TodoBody() {
  return (
    <div className="p-5">
      <TodoAdd />
      <Todos />
    </div>
  );
}

export default TodoBody;
