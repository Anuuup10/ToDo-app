import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useEffect, useState } from "react";
import Message from "./components/Message";
import { addItemToServer, deleteFromServer, getItemFromServer } from "./services/itemService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleAddButton = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButton = async (id) => {
    const deletedId = await deleteFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
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
