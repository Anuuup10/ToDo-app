import { useState } from "react";

function AddTodo({onNewItem}) {

  const [todoname, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleName = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoname, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" value={todoname} placeholder="Enter Todo here" onChange={handleName}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDueDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
