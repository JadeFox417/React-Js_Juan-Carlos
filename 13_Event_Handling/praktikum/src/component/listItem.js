const ListItem = ({ item, deleteToDo }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.completed}</td>
      <td>
        <button
          onCLick={() => {
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
