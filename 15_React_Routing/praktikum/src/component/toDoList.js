import ListItem from "./listItem";

const ToDoList = (props) => {
  const { datas, deleteToDo, handleCheckBox } = props;
  return (
    <div>
      <table className="toDoList" cellPadding="5px" cellSpacing="0">
        <tbody>
          {datas.map((toDo) => (
            <ListItem key={toDo.id} item={toDo} deleteToDo={deleteToDo} handleCheckBox={handleCheckBox} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
