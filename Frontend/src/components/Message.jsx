const Message = () => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-200 bg-[#fbfcfe] px-5 py-10 text-center">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf0fa] text-[#6179a3]">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path d="M7 4.75h10A2.25 2.25 0 0 1 19.25 7v13.25H4.75V7A2.25 2.25 0 0 1 7 4.75Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 3v3.5M16 3v3.5M8 10h8m-8 4h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <p className="font-semibold text-slate-800">A clear slate.</p>
      <p className="mt-1 text-sm text-slate-500">Add your first task and make today count.</p>
    </div>
  );
};

export default Message;