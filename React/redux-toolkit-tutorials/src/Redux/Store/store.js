import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CounterSlice from "../Slices/CounterSlice";
import TodoSlice from "../Slices/TodoSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({ CounterSlice, TodoSlice });
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
