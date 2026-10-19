function AppName() {
  return (
    <a href="/" className="inline-flex items-center gap-3" aria-label="Daymark home">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#dce7f7] text-[#52698f]">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="m6.5 12.5 3.4 3.4 7.8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12a8 8 0 1 1-4.1-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-xl font-semibold tracking-tight text-[#34445f]">daymark</span>
    </a>
  );
}

export default AppName;