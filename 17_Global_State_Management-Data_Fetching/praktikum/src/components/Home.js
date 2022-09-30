import React from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import NavBar from "./NavBar";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="title">todos</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default Home;
