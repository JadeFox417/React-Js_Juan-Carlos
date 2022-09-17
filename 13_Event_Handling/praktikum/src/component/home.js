import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./toDoList";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          id: uuidv4(),
          title: "Mengerjakan Exercise",
          completed: true,
        },
        {
          id: uuidv4(),
          title: "Mengerjakan Assignment",
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

  render() {
    return (
      <div>
        <h1 className="title">todos</h1>
        <ToDoList datas={this.state.datas} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default Home;
