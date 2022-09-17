import "../home.css";

const Content = () => {
  const listItems = [
    {
      id: 1,
      title: "Create Component",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy To Server",
      completed: false,
    },
  ];
  return (
    <div>
      {listItems.map((item) => (
        <div className="listItem" key={item.id}>
          <p className={`${item.completed === true && "lineThrough"}`}> {item.title} </p>
        </div>
      ))}
    </div>
  );
};

export default Content;
