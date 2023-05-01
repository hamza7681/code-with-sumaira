import React from "react";
import ComponentB from "./ComponentB";
import "./style.css";

const ComponentA = ({ name, address, click }) => {
  return (
    <>
      <h1 className="heading">My name is {name}</h1>
      <h1 className="text-red-500 bg-black text-[32px] capitalize px-[10px] py-[10px]">
        My address is {address}
      </h1>
      <button onClick={click}>Click</button>
      <ComponentB newName={name} />
    </>
  );
};

export default ComponentA;

// class ComponentA extends React.Component {
//   name = "Hamza";
//   render() {
//     return (
//       <>
//         <h1>My name is {this.name}</h1>
//       </>
//     );
//   }
// }

// export default ComponentA;
