import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/store/slices/TodoSlice";

const TodoItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.todos.todoList;
  });

  const removeItem = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <ul>
        {items.map((item, ind) => {
          return (
            <li
              key={ind}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <p>{item}</p>
              <Button onClick={() => removeItem(ind)}>delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItems;
