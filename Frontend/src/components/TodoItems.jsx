import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick }) => {
  const sortedTodoItems = [...todoItems].sort(
    (first, second) => Number(Boolean(first.completed)) - Number(Boolean(second.completed)),
  );

  return (
    <ul className="space-y-3">
      {sortedTodoItems.map((items) => {
        return (
          <TodoItem
            key={items.id}
            id={items.id}
            todoName={items.name}
            todoDate={items.dueDate}
            completed={items.completed}
            onDeleteClick={onDeleteClick}
            onCompleteClick={onCompleteClick}
          />
        );
      })}
    </ul>
  );
};

export default TodoItems;
