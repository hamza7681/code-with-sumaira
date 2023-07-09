import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../Redux/Slices/TodoSlice";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((s) => s.TodoSlice);
  const add = () => {
    dispatch(addTodo({ text: todo }));
  };
  const deleteList = (index) => {
    dispatch(deleteTodo({ id: index }));
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      <button onClick={add}>Add Todo</button>
      {todos.map((val, index) => {
        return (
          <p key={index}>
            {val} <button onClick={() => deleteList(index)}>X</button>
          </p>
        );
      })}
    </>
  );
};

export default TodoList;
