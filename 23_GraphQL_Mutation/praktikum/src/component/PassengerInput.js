import { useState } from "react";
import useAddPassenger from "../hooks/useAddPassenger";
import LoadingSvg from "./LoadingSvg";
import "./Home.css";

function PassengerInput() {
  const [state, setState] = useState({
    name: "",
    age: "",
    gender: "Male",
    editing: true,
  });

  const { addPassenger, addLoading } = useAddPassenger();

  if (addLoading) {
    return <LoadingSvg />;
  }

  const addData = (newPassenger) => {
    const newData = {
      ...newPassenger,
    };
    addPassenger({
      variables: {
        name: newData.name,
        age: newData.age,
        gender: newData.gender,
      },
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name.trim() && state.age && state.gender) {
      const age = state.age;
      if (age >= 75 || age <= 12) {
        alert("Age is not appropriate");
      } else {
        const newData = {
          name: state.name,
          age: state.age,
          gender: state.gender,
        };
        addData(newData);
        setState({
          ...state,
          name: "",
          age: "",
          gender: "Male",
          editing: true,
        });
      }
    } else {
      alert("Data still empty!");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Enter Your Name</p>
        <input type="text" className="input-text" placeholder="Your name ..." value={state.name} name="name" onChange={onChange} />
        <p>Enter Your Age</p>
        <input type="number" className="input-text" placeholder="Your age ..." value={state.age} name="age" onChange={onChange} />
        <p>Enter Your Gender</p>
        <select onChange={onChange} name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Close
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Enter passenger data
      </button>
    </div>
  );
}

export default PassengerInput;
