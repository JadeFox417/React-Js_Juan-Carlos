import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, handleCheckBox, fetchToDo } from "../store/features/todoSlice";
import ListItem from "./ListItem";

const ToDoList = () => {
  const datas = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToDo());
  }, [dispatch]);

  return (
    <div>
      <table className="toDoList" cellPadding="5px" cellSpacing="0">
        <tbody>
          {Array.from(datas).map((toDo) => (
            <ListItem key={toDo.id} item={toDo} deleteToDo={() => dispatch(deleteToDo(toDo.id))} handleCheckBox={() => dispatch(handleCheckBox(toDo.id))} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
