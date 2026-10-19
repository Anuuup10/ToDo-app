import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoname, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewItem(todoname.trim(), dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_200px_auto]">
      <label className="sr-only" htmlFor="todo-name">Task name</label>
      <input
        id="todo-name"
        type="text"
        value={todoname}
        placeholder="e.g. Prepare weekly report"
        onChange={(event) => setTodoName(event.target.value)}
        required
        className="h-12 min-w-0 rounded-xl border border-slate-200 bg-[#fbfcfe] px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#90a8cf] focus:ring-4 focus:ring-[#90a8cf]/20"
      />
      <div>
        <label className="sr-only" htmlFor="todo-date">Due date</label>
        <input
          id="todo-date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          className="h-12 w-full rounded-xl border border-slate-200 bg-[#fbfcfe] px-4 text-sm text-slate-600 outline-none transition focus:border-[#90a8cf] focus:ring-4 focus:ring-[#90a8cf]/20"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#dce7f7] px-5 text-sm font-semibold text-[#405779] shadow-sm transition hover:bg-[#cddcf1] focus:outline-none focus:ring-4 focus:ring-[#90a8cf]/30 active:scale-[0.98]"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        Add task
      </button>
    </form>
  );
}

export default AddTodo;
