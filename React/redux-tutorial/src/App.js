import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const { count } = useSelector((s) => s.CounterReducer);

  return (
    <>
      <h1>Hello Redux</h1>
      <Counter />
      <h1>{count}</h1>
    </>
  );
}

export default App;
