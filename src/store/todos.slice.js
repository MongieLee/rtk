import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const TODO_KEY = "todos";

const todoAdapter = createEntityAdapter({ selectId: state => state.fid });
console.log(todoAdapter.getInitialState());

const { selectAll } = todoAdapter.getSelectors();
export const selectTodosList = createSelector(
  state => state[TODO_KEY],
  selectAll
)


export const loadTodos = createAsyncThunk("todos/loadTodos", (payload) => {
  console.log(payload);
  // const tempData = [{ id: Math.random() * 1000, name: "a1" }, { id: Math.random() * 1000, name: "b1" }, { id: Math.random() * 1000, name: "c1" }]
  return axios.get("http://localhost:8888/data").then(res => res.data);
})

const { reducer: TodosReducer, actions } = createSlice({
  name: TODO_KEY,
  initialState: todoAdapter.getInitialState(),
  reducers: {
    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // }
    addTodo: {
      reducer: (state, action) => todoAdapter.addOne(state, action.payload),
      prepare: todo => ({ payload: { ...todo, fid: Math.random() * 1000 } })
    },
    setTodos: (state, action) => todoAdapter.addMany(state, action.payload)

  },
  extraReducers: {
    [loadTodos.fulfilled]: (state, action) => todoAdapter.addMany(state, action.payload)
  }
});


export const { addTodo, setTodos } = actions;
export default TodosReducer;
