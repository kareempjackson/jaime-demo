export function StoreLogo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#052e16"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#fafafa]">Juice Bar</h1>
        <p className="text-sm text-[#6b6b70]">Staff Portal</p>
      </div>
    </div>
  );
}
