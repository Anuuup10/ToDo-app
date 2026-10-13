import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((items) => {
        return <TodoItem todoName={items.name} todoDate={items.dueDate} />;
      })}
    </div>
  );
};

export default TodoItems;
