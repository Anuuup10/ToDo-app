import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddButton = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((item)=> item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleAddButton} />
        {todoItems.length === 0 && <Message />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton} />
      </center>
    </>
  );
}

export default App;
