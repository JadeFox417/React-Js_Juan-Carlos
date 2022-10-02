import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, handleCheckBox } from "../store/todoSlice";
import ListItem from "./ListItem";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="toDoList" cellPadding="5px" cellSpacing="0">
        <tbody>
          {todos.map((toDo) => (
            <ListItem key={toDo.id} item={toDo} deleteToDo={() => dispatch(deleteToDo(toDo.id))} handleCheckBox={() => dispatch(handleCheckBox(toDo.id))} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
