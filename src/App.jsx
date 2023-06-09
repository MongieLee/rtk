import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  loadTodos,
  selectTodosList,
  TODO_KEY,
} from "./store/todos.slice";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodosList);
  return (
    <div className="App">
      {JSON.stringify(todos)}
      <hr />
      <button
        onClick={() => {
          dispatch(addTodo({ name: "rtk" }));
        }}
      >
        trk button
      </button>
      <button
        onClick={() => {
          dispatch(loadTodos({ name: "rtk" }));
        }}
      >
        trk async button
      </button>
    </div>
  );
}

export default App;
