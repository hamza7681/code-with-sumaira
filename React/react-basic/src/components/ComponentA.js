import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hamza",
      age: 25,
    };
  }
  changeData = () => {
    this.setState({ name: "Ali", age: 22 });
  };
  render() {
    return (
      <>
        <h1 className="text-[24px]">
          This is class component and my name is {this.state.name}, my age is{" "}
          {this.state.age}
        </h1>
        <button
          className="bg-green-500 text-white p-4"
          onClick={this.changeData}
        >
          Button of Class
        </button>
      </>
    );
  }
}

export default ComponentA;
