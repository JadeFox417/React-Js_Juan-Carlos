const ListItem = ({ item, deleteToDo, handleCheckBox }) => {
  return (
    <tr>
      <td>
        <input
          onChange={() => {
            handleCheckBox(item.id);
          }}
          className="checkbox"
          type={"checkbox"}
          {...(item.completed === true ? { checked: "checked" } : { checked: "" })}
        />
        <p className={`${item.completed === true ? "lineThrough" : "normal"}`}> {item.title} </p>
      </td>
      <td>
        <button
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
