import { useState } from "react";
import Button from "./components/Button";
import TodoItems from "./components/TodoItems";
import { useDispatch } from "react-redux";
import { addTodo, clearAllTodo } from "./redux/store/slices/TodoSlice";

function App() {
  const dispatch = useDispatch();
  const [item, setItem] = useState("");

  const addItem = (item) => {
    dispatch(addTodo(item));
    setItem("");
  };

  const removeAll = () => {
    dispatch(clearAllTodo());
  };

  return (
    <div>
      <h2>Redux Toolkit</h2>
      <input
        type="text"
        placeholder="enter item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <Button onClick={() => addItem(item)}>Add item</Button>
      <hr />
      <TodoItems />
      <Button onClick={removeAll}>Clear All Items</Button>
    </div>
  );
}

export default App;
