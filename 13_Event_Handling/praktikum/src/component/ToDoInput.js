import { Component } from "react";

class ToDoInput extends Component {
  state = {
    title: "",
    completed: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = this.state.title;
    if (formIsNotEmpty) {
      const newTodo = {
        title: this.state.title,
        completed: false,
      };

      this.props.addToDo(newTodo);
      this.setState({
        title: "",
        completed: false,
      });
    } else {
      alert("Enter What's Your Plan");
    }
  };

  render() {
    return (
      <div>
        <div onSubmit={() => {}}>
          <input type="text" placeholder="Add todo..." value={this.state.title} name="title" onChange={this.onChange}></input>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default ToDoInput;
