function TodoItem({
  id,
  todoName,
  todoDate,
  completed = false,
  onDeleteClick,
  onCompleteClick,
}) {
  const dateParts = typeof todoDate === "string"
    ? todoDate.match(/^(\d{4})-(\d{2})-(\d{2})/)
    : null;
  const date = dateParts
    ? new Date(Number(dateParts[1]), Number(dateParts[2]) - 1, Number(dateParts[3]))
    : todoDate
      ? new Date(todoDate)
      : null;
  const formattedDate = date && !Number.isNaN(date.getTime())
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date)
    : null;

  return (
    <li className={`group flex items-center gap-4 rounded-2xl border px-4 py-4 transition sm:px-5 ${
      completed
        ? "border-slate-100 bg-[#f8faff]"
        : "border-slate-100 bg-white hover:border-[#dce7f7] hover:bg-[#fdfdff]"
    }`}>
      <button
        type="button"
        aria-label={completed ? `${todoName} completed` : `Mark ${todoName} as completed`}
        aria-pressed={completed}
        disabled={completed}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition focus:outline-none focus:ring-4 focus:ring-[#90a8cf]/30 ${
          completed
            ? "border-[#8ba4ca] bg-[#dce7f7] text-[#405779]"
            : "border-slate-300 text-transparent hover:border-[#8ba4ca]"
        }`}
        onClick={() => onCompleteClick(id)}
      >
        {completed && (
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-4 w-4">
            <path d="m3.5 8 3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef3fb] text-[#7188ae]">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M7 5h10a2 2 0 0 1 2 2v12H5V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 3v4m8-4v4M8 11h8m-8 4h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <div className="min-w-0 flex-1">
        <p className={`break-words text-sm font-semibold ${
          completed ? "text-slate-400 line-through" : "text-slate-800"
        }`}>{todoName}</p>
        {formattedDate ? (
          <p className={`mt-1 text-xs ${completed ? "text-slate-400" : "text-slate-500"}`}>
            Due {formattedDate}
          </p>
        ) : (
          <p className="mt-1 text-xs text-slate-400">No due date</p>
        )}
      </div>
      <button
        type="button"
        aria-label={`Delete ${todoName}`}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-4 focus:ring-rose-100"
        onClick={() => onDeleteClick(id)}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path d="M4.5 6h11m-9.5 0 .6 9.1a1 1 0 0 0 1 .9h4.8a1 1 0 0 0 1-.9L14 6M8 6V4.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5V6m-3 3v4m2-4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
