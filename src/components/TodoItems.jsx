import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import getTodos from "../redux/apis/getTodos";
import deleteTodo from "../redux/apis/deleteTodo";

const TodoItems = () => {
  const dispatch = useDispatch();

  const { todoList, loading } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "10px",
              }}
            >
              <p style={{ textAlign: "left" }}>{item.item}</p>
              <div>
                <Button onClick={() => {}}>view</Button>
                <Button onClick={() => dispatch(deleteTodo(item.id))}>
                  delete
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItems;
