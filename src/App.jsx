import TodoApp from "./components/TodoApp";

import { TodosProvider } from "./context/todosContext";

export default function App() {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
}
