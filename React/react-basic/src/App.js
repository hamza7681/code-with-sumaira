import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
  const name = "Hamza";
  const address = "lahore";

  const clickMe = () => {
    alert("Hello World");
  };

  return (
    <>
      <p>Hello React</p>
      <ComponentA name={name} address={address} click={clickMe} />
    </>
  );
}

export default App;
