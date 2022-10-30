import React, { useState } from "react";
import useUpdatePassenger from "../hooks/useUpdatePassenger";
import "./Home.css";

const ListItem = (props) => {
  const { id, name, age, gender } = props.data;

  const { updatePassenger } = useUpdatePassenger();

  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({
    name: name,
    age: age,
    gender: gender,
  });

  const updateDatabase = (newPassenger) => {
    updatePassenger({ variables: newPassenger });
  };

  const updateData = () => {
    const newData = { id, ...data };
    updateDatabase(newData);
  };

  const handleChangeName = (e) => {
    setData({ ...data, name: e.target.value });
  };
  const handleChangeAge = (e) => {
    setData({ ...data, age: Number(e.target.value) });
  };
  const handleChangeGender = (e) => {
    setData({ ...data, gender: e.target.value });
  };

  return (
    <tr>
      <td>{editMode ? <input type="text" value={data.name} onChange={handleChangeName} /> : name}</td>
      <td>{editMode ? <input type="number" value={data.age} onChange={handleChangeAge} /> : age}</td>
      <td>
        {editMode ? (
          <select defaultValue={data.gender} onChange={handleChangeGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          gender
        )}
      </td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Delete</button>
      </td>
      <td className="removeBorder" onClick={() => setEditMode(!editMode)}>
        {editMode ? <button onClick={updateData}>Done</button> : <button>Edit</button>}
      </td>
    </tr>
  );
};

export default ListItem;
