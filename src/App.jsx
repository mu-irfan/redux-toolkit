import { useState } from "react";
import Button from "./components/Button";
import TodoItems from "./components/TodoItems";
import { useDispatch } from "react-redux";
import createTodo from "./redux/apis/createTodo";

function App() {
  const dispatch = useDispatch();
  const [item, setItem] = useState({});

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const todoSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(item));
    setItem({});
  };

  return (
    <div>
      <h2>Redux Toolkit</h2>
      <form onSubmit={todoSubmit}>
        <input
          type="text"
          placeholder="enter item name"
          name="item"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <Button type="submit" onClick={() => {}}>
          Add item
        </Button>
      </form>
      <hr />
      <TodoItems />
    </div>
  );
}

export default App;
