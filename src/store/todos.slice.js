import { createSlice } from "@reduxjs/toolkit";

export const TODO_KEY = "todos";

const { reducer: TodosReducer, actions } = createSlice({
  name: TODO_KEY,
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addTodo } = actions;
export default TodosReducer;
