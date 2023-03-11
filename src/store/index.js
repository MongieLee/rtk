import { configureStore } from "@reduxjs/toolkit";
import TodosReducer, { TODO_KEY } from "./todos.slice";
export default configureStore({
  reducer: {
    [TODO_KEY]: TodosReducer
  },
  devTools: true
})