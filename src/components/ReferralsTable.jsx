import { formatDate } from "../utils/formatDate";
import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

const ReferralsTable = ({ referrals }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f8fafd] border-b border-slate-100">
            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              SERVICE
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              DATE
            </th>
            <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              PROFIT
            </th>
          </tr>
        </thead>
        <tbody>
          {referrals.length > 0 ? (
            referrals.map((item) => (
              <tr
                key={item.id}
                onClick={() => navigate(`/referral/${item.id}`)}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-5 text-sm font-medium text-slate-800">
                  {item.name}
                </td>
                <td className="px-6 py-5 text-sm text-slate-500">
                  {item.serviceName}
                </td>
                <td className="px-6 py-5 text-sm text-slate-500">
                  {formatDate(item.date)}
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-indigo-600">
                  {formatCurrency(item.profit)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-5 text-sm text-slate-400">
                No matching entries
              </td>
              <td className="px-6 py-5 text-sm text-slate-400">
                No matching entries
              </td>
              <td className="px-6 py-5 text-sm text-slate-400">
                No matching entries
              </td>
              <td className="px-6 py-5 text-sm text-slate-400">
                No matching entries
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralsTable;
