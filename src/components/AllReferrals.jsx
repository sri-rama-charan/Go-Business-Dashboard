import { useState, useEffect } from "react";
import SearchFilterApi from "../services/searchFilterApi";
import ReferralsTable from "./ReferralsTable";
import Pagination from "./Pagination";

const AllReferrals = ({ referralsList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [referrals, setReferrals] = useState(referralsList);
  const pageSize = 10;

  useEffect(() => {
    setReferrals(referralsList);
  }, [referralsList]);

  const onSearchFilter = async (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setCurrentPage(1);
    const data = await SearchFilterApi(val, sortOrder);
    setReferrals(data?.data?.referrals || []);
  };

  const onSortOrder = async (e) => {
    const val = e.target.value;
    setSortOrder(val);
    setCurrentPage(1);
    const data = await SearchFilterApi(searchQuery, val);
    setReferrals(data?.data?.referrals || []);
  };

  if (referrals === undefined) {
    return (
      <section
        role="region"
        aria-label="All referrals list"
        className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
      >
        <h2 className="text-xl font-bold text-gray-900 text-left mb-6">
          All referrals
        </h2>
        <div className="text-gray-400 text-sm text-left">
          Loading referrals...
        </div>
      </section>
    );
  }

  const totalEntries = referrals.length;
  const totalPages = Math.ceil(totalEntries / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedReferrals = referrals.slice(startIndex, endIndex);

  return (
    <section
      role="region"
      aria-label="All referrals list"
      className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-900 text-left mb-6">
        All referrals
      </h2>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <label
            htmlFor="search"
            className="text-sm font-semibold text-slate-400"
          >
            Search
          </label>
          <input
            aria-label="Search referrals"
            id="search"
            type="text"
            placeholder="Name or service…"
            value={searchQuery}
            onChange={onSearchFilter}
            className="border border-slate-200/80 px-4 py-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 bg-[#f8fafc] text-slate-700 w-64 outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-slate-400 flex items-center gap-2 cursor-pointer">
            Sort by date
            <select
              value={sortOrder}
              onChange={onSortOrder}
              className="border border-slate-200/80 px-4 py-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 bg-white text-slate-700 cursor-pointer font-medium outline-none transition-all"
            >
              <option value="desc">Newest first</option>
              <option value="asc">Oldest first</option>
            </select>
          </label>
        </div>
      </div>

      <ReferralsTable referrals={paginatedReferrals} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalEntries={totalEntries}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </section>
  );
};

export default AllReferrals;
