import React from "react";
import ListItem from "./ListItem";

const ToDoList = (props) => {
  const { datas, deleteToDo, handleCheckBox } = props;
  return (
    <div>
      <table className="toDoList" cellPadding="5px" cellSpacing="0">
        <tbody>
          {datas.map((toDo) => (
            <ListItem key={toDo.id} item={toDo} deleteToDo={deleteToDo} handleCheckBox={handleCheckBox} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
