import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../store/todoSlice";

function ToDoInput() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    completed: false,
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = data.title;
    if (formIsNotEmpty) {
      const newTodo = {
        title: data.title,
        completed: false,
      };

      dispatch(addToDo(newTodo));
      setData({
        title: "",
        completed: false,
      });
    } else {
      alert("Enter What's Your Plan");
    }
  };

  return (
    <div>
      <div className="addBar">
        <input type="text" placeholder="Add todo..." value={data.title} name="title" onChange={onChange} className="input"></input>
        <button className="buttonSubmit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ToDoInput;
