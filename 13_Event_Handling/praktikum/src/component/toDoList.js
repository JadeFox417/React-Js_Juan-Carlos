import ListItem from "./listItem";

const ToDoList = (props) => {
  const { datas, deleteToDo } = props;
  return (
    <div>
      <table>
        <thead>
          <td>Title</td>
          <td>Completed</td>
        </thead>
        <tbody>
          {datas.map((toDo) => (
            <ListItem key={toDo.id} item={toDo} deleteToDo={deleteToDo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
