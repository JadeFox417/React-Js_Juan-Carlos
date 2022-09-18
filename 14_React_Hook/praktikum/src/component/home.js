import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./toDoList";
import ToDoInput from "./toDoInput";
import "../App.css";

const initialValue = [
  {
    id: uuidv4(),
    title: "Do Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Do Assignment",
    completed: false,
  },
];

function Home() {
  const [data, setData] = useState(initialValue);

  const deleteToDo = (id) => {
    setData((oldData) =>
      oldData.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const addToDo = (newTodo) => {
    const newList = { id: uuidv4(), ...newTodo };

    setData((oldData) => [...oldData, newList]);
  };

  const handleCheckBox = (id) => {
    const checkedBox = data.map((item) => {
      if (item.id === id) {
        !item.completed ? (item.completed = true) : (item.completed = false);
      }
      return item;
    });

    setData(checkedBox);
  };

  return (
    <div>
      <h1 className="title">todos</h1>
      <ToDoInput addToDo={addToDo} />
      <ToDoList datas={data} deleteToDo={deleteToDo} handleCheckBox={handleCheckBox} />
    </div>
  );
}

export default Home;
