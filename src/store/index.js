import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TodosReducer, { TODO_KEY } from "./todos.slice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    [TODO_KEY]: TodosReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: true,
})