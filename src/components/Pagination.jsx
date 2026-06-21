const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  totalEntries,
  startIndex,
  endIndex,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 pt-6 border-t border-slate-100">
      <div className="text-sm font-medium text-slate-400">
        Showing {totalEntries === 0 ? 0 : startIndex + 1}–
        {Math.min(endIndex, totalEntries)} of {totalEntries} entries
      </div>

      <div className="flex items-center gap-1">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1.5 text-sm font-semibold text-slate-400 hover:text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          Previous
        </button>

        {totalPages > 1 &&
          pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                currentPage === page
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1.5 text-sm font-semibold text-slate-400 hover:text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
