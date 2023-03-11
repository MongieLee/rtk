import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const TODO_KEY = "todos";

export const loadTodos = createAsyncThunk("todos/loadTodos", (payload, thunkApi) => {
  console.log(payload);
  setTimeout(() => {
    console.log('====================================');
    console.log("模拟异步操作");
    console.log('====================================');
    const tempData = [{ id: Math.random() * 1000, name: "a1" }, { id: Math.random() * 1000, name: "b1" }, { id: Math.random() * 1000, name: "c1" }]
    thunkApi.dispatch(setTodos(tempData));
  }, 1000);
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
  }
});

export const { addTodo, setTodos } = actions;
export default TodosReducer;
