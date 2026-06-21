import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { fetchReferralById } from "../../services/referralsApi";
import { formatDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

const ReferralDetails = () => {
  const { id } = useParams();
  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReferral = async () => {
      setLoading(true);
      try {
        const body = await fetchReferralById(id);
        let matched = null;
        if (body && body.success && body.data) {
          const data = body.data;
          if (data && typeof data === "object" && !Array.isArray(data)) {
            if (data.id == id) {
              matched = data;
            } else if (data.referrals && Array.isArray(data.referrals)) {
              matched = data.referrals.find((item) => item.id == id);
            }
          } else if (Array.isArray(data)) {
            matched = data.find((item) => item.id == id);
          }
        }
        setReferral(matched);
      } catch (err) {
        console.error("Error fetching referral:", err);
        setReferral(null);
      } finally {
        setLoading(false);
      }
    };
    getReferral();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pr-24 pl-24 pb-16">
        <Navbar />
        <div className="max-w-5xl mx-auto py-12">
          <div className="text-[#64748b] text-base animate-pulse">Loading referral details...</div>
        </div>
      </div>
    );
  }

  if (!referral) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pr-24 pl-24 pb-16">
        <Navbar />
        <div className="max-w-5xl mx-auto py-12">
          <Link
            to="/"
            aria-label="Back to dashboard"
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-2 mb-8 transition-colors"
          >
            &larr; Back to dashboard
          </Link>
          <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-2">
            Referral not found
          </h1>
          <p className="text-[#64748b] text-sm">
            The requested referral could not be loaded or does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pr-24 pl-24 pb-16">
      <Navbar />
      <div className="max-w-5xl mx-auto py-12">
        {/* Back Link */}
        <Link
          to="/"
          aria-label="Back to dashboard"
          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-2 mb-8 transition-colors"
        >
          &larr; Back to dashboard
        </Link>

        {/* Headings */}
        <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-1">
          Referral Details
        </h1>
        <p className="text-[#64748b] text-sm mb-8">
          Full information for this referral partner.
        </p>

        {/* Details Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_0_rgba(0,0,0,0.06)] p-8 max-w-lg">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-2">
            <h2 className="text-2xl font-bold text-[#0f172a]">
              {referral.name}
            </h2>
            <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {referral.serviceName}
            </span>
          </div>

          {/* Definition List */}
          <dl className="divide-y divide-slate-100">
            <div className="flex items-center py-5">
              <dt className="w-48 text-[#94a3b8] font-bold text-xs tracking-wider uppercase">
                Referral ID
              </dt>
              <dd className="text-[#0f172a] font-semibold text-sm">
                {referral.id}
              </dd>
            </div>

            <div className="flex items-center py-5">
              <dt className="w-48 text-[#94a3b8] font-bold text-xs tracking-wider uppercase">
                Name
              </dt>
              <dd className="text-[#0f172a] font-semibold text-sm">
                {referral.name}
              </dd>
            </div>

            <div className="flex items-center py-5">
              <dt className="w-48 text-[#94a3b8] font-bold text-xs tracking-wider uppercase">
                Service Name
              </dt>
              <dd className="text-[#0f172a] font-semibold text-sm">
                {referral.serviceName}
              </dd>
            </div>

            <div className="flex items-center py-5">
              <dt className="w-48 text-[#94a3b8] font-bold text-xs tracking-wider uppercase">
                Date
              </dt>
              <dd className="text-[#0f172a] font-semibold text-sm">
                {formatDate(referral.date)}
              </dd>
            </div>

            <div className="flex items-center py-5 pb-2">
              <dt className="w-48 text-[#94a3b8] font-bold text-xs tracking-wider uppercase">
                Profit
              </dt>
              <dd className="text-[#0f172a] font-bold text-sm">
                {formatCurrency(referral.profit)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ReferralDetails;
