import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useEffect, useState } from "react";
import Message from "./components/Message";
import {
  addItemToServer,
  deleteFromServer,
  getItemFromServer,
  markItemCompletedOnServer,
} from "./services/itemService";

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

  const handleCompleteButton = async (id) => {
    const updatedItem = await markItemCompletedOnServer(id);
    setTodoItems((items) =>
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
  };

  return (
    <main className="min-h-screen bg-[#f4f7fc] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <AppName />
          <p className="text-sm font-medium text-slate-500">
            {new Intl.DateTimeFormat("en", {
              weekday: "long",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </p>
        </header>

        <section className="mb-8 grid gap-5 md:grid-cols-[1.4fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-[#e1e9f7] bg-[#e8effa] p-7 text-slate-800 shadow-[0_18px_50px_-28px_rgba(100,125,170,0.25)] sm:p-9">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#6179a3]">
              Your personal space
            </p>
            <h1 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Make room for what matters.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
              A little progress each day adds up to a lot. Keep your next steps
              clear and your day feeling lighter.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-[#e8ebe5] bg-white p-7 shadow-sm sm:p-8">
            <div>
              <p className="text-sm font-medium text-slate-500">On your list</p>
              <p className="mt-2 text-5xl font-semibold tracking-tight text-[#52698f]">
                {String(todoItems.length).padStart(2, "0")}
              </p>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              {todoItems.length === 1 ? "One thing at a time." : "Every task is a fresh start."}
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#e8ebe5] bg-white p-5 shadow-[0_12px_40px_-30px_rgba(15,23,42,0.25)] sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold tracking-tight">Plan your day</h2>
            <p className="mt-1 text-sm text-slate-500">What would you like to get done?</p>
          </div>
          <AddTodo onNewItem={handleAddButton} />

          <div className="mt-9 border-t border-slate-100 pt-7">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight">Your tasks</h2>
              <span className="rounded-full bg-[#eef3fb] px-3 py-1 text-xs font-semibold text-[#52698f]">
                {todoItems.length} {todoItems.length === 1 ? "task" : "tasks"}
              </span>
            </div>
            {todoItems.length === 0 ? (
              <Message />
            ) : (
              <TodoItems
                todoItems={todoItems}
                onDeleteClick={handleDeleteButton}
                onCompleteClick={handleCompleteButton}
              />
            )}
          </div>
        </section>

        <footer className="py-7 text-center text-xs text-slate-400">
          Take it one step at a time.
        </footer>
      </div>
    </main>
  );
}

export default App;
