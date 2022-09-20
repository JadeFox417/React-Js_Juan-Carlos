import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
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
      ],
    };
  }

  deleteToDo = (id) => {
    const newToDoList = this.state.datas.filter((data) => data.id !== id);

    this.setState({ datas: newToDoList });
  };

  addToDo = (newTodo) => {
    const newList = { id: uuidv4(), ...newTodo };

    this.setState({ datas: [...this.state.datas, newList] });
  };

  handleCheckBox = (id) => {
    const checkedBox = this.state.datas.findIndex((datas) => datas.id === id);
    let data = [...this.state.datas];

    if (checkedBox !== -1) {
      data[checkedBox].completed = !data[checkedBox].completed;
    }

    this.setState({ datas: data });
  };

  render() {
    return (
      <div>
        <h1 className="title">todos</h1>
        <ToDoInput addToDo={this.addToDo} />
        <ToDoList datas={this.state.datas} deleteToDo={this.deleteToDo} handleCheckBox={this.handleCheckBox} />
      </div>
    );
  }
}

export default Home;
