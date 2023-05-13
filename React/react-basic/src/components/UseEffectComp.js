import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectComp = () => {
  const [person, setPerson] = useState({
    name: "Hamza",
    age: 22,
    city: "LHR",
  });

  const [fetchAgain, setFetchAgain] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPerson({
  //         ...person,
  //         city: "FSD",
  //       });
  //     }, 3000);
  //   }, []);

  useEffect(() => {
    const getData = async () => {
      //   try {
      //     const response = await fetch("https://reqres.in/api/users?page=2");
      //     const data = await response.json();
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      try {
        const res = await axios.get("https://reqres.in/api/users?page=2");
        console.log(res.data);
        setFetchAgain(false);
      } catch (error) {
        console.log(error);
        setFetchAgain(false);
      }

      //   await axios
      //     .get("https://reqres.in/api/users?page=2")
      //     .then((res) => console.log(res.data))
      //     .catch((e) => console.log(e));

      //   await fetch("https://reqres.in/api/users?page=2")
      //     .then((res) => res.json())
      //     .then((data) => console.log(data))
      //     .catch((e) => console.log(e));
    };
    getData();
  }, [fetchAgain]);

  const click = () => {
    setFetchAgain(true);
  };

  return (
    <>
      <p className="text-[24px]">
        My name is {person.name} and my age is {person.age}. I live in{" "}
        {person.city}
      </p>
      <button onClick={click}>Fetch Again</button>
    </>
  );
};

export default UseEffectComp;
