import "./App.css";
// import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Register from "./components/Register";
import UseEffectComp from "./components/UseEffectComp";

function App() {
  // const name = "Hamza";
  // const address = "lahore";

  // const clickMe = () => {
  //   alert("Hello World");
  // };

  return (
    <>
      {/* <p>
        Hello
        {name}
      </p>
      <ComponentA name={name} address={address} click={clickMe} /> */}
      {/* <ComponentB /> */}
      {/* <Register /> */}
      <UseEffectComp />
    </>
  );
}

export default App;
