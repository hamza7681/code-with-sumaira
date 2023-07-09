import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state, action) => {
      const { count } = action.payload;
      state.count += count;
    },
    removeCount: (state, action) => {
      const { count } = action.payload;
      state.count -= count;
    },
  },
});

export const { addCount, removeCount } = CounterSlice.actions;
export default CounterSlice.reducer;
