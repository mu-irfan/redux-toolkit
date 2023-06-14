import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import getTodos from "../redux/apis/getTodos";

const TodoItems = () => {
  const dispatch = useDispatch();

  const { todoList, loading } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <ul>
        {todoList?.map((item) => {
          return (
            <li
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <p>{item.item}</p>
              <Button onClick={() => {}}>delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItems;
