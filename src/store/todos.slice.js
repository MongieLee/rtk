import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const TODO_KEY = "todos";

export const loadTodos = createAsyncThunk("todos/loadTodos", (payload) => {
  console.log(payload);
  // const tempData = [{ id: Math.random() * 1000, name: "a1" }, { id: Math.random() * 1000, name: "b1" }, { id: Math.random() * 1000, name: "c1" }]
  return axios.get("http://localhost:8888/data").then(res => res.data);
})

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
    },
    setTodos: (state, action) => {
      console.log(action.payload);
      action.payload.forEach(i => state.push(i))
    }
  },
  extraReducers: {
    [loadTodos.fulfilled]: (state, action) => {
      console.log(action);
      console.log('fulfilled');
      action.payload.forEach(i => state.push(i))
    }
  }
});


export const { addTodo, setTodos } = actions;
export default TodosReducer;
