import "./App.css";
import { useSelector } from "react-redux";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import TodoList from "./components/TodoList";

function App() {
  const { count } = useSelector((s) => s.CounterSlice);
  return (
    <>
      <h1>This is root Component with initial state {count}</h1>
      <ComponentA />
      <ComponentB />
      <br />
      <br />
      <TodoList />
    </>
  );
}

export default App;
