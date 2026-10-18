import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((items) => {
        return (
          <TodoItem
            key={items.id}
            id={items.id}
            todoName={items.name}
            todoDate={items.dueDate}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
