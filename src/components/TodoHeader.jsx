import Clock from "./Clock";
import CurrentDate from "./CurrentDate";

function TodoHeader() {
  return (
    <header className="flex justify-between p-5 items-center border-b-4 border-white">
      <Clock />
      <h4 className="font-bold">WELCOME</h4>
      <CurrentDate />
    </header>
  );
}

export default TodoHeader;
