import React from "react";

const ListItem = ({ item, deleteToDo, handleCheckBox }) => {
  return (
    <tr className="row">
      <td className="list">
        <input
          onChange={() => {
            handleCheckBox(item.id);
          }}
          className="checkBox"
          type={"checkbox"}
          {...(item.completed === true ? { checked: "checked" } : { checked: "" })}
        />
        <p className={`${item.completed === true ? "lineThrough" : "normal"}`}> {item.title} </p>
      </td>
      <td className="listButton">
        <button
          className="buttonDelete"
          onClick={() => {
            deleteToDo(item.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default ListItem;
