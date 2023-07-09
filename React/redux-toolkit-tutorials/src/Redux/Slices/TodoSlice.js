import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      state.todos.push(text);
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((_, index) => index !== id);
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
