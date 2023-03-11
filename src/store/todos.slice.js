import { createSlice } from "@reduxjs/toolkit";

export const TODO_KEY = "todos";

const { reducer: TodosReducer, actions } = createSlice({
  name: TODO_KEY,
  initialState: [],
  reducers: {
    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // }
    addTodo: {
      reducer: (state, action) => {
        console.log('====================================');
        console.log(action);
        console.log('====================================');
        state.push(action.payload)
      },
      prepare: todo => {
        return { payload: { ...todo, id: Math.random() * 1000 } }
      }
    }
  }
});

export const { addTodo } = actions;
export default TodosReducer;
