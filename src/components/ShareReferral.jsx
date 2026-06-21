import { useState } from "react";

const ShareReferral = ({ referral }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const link = referral?.link;
  const code = referral?.code;

  if (!link && !code) {
    return (
      <section
        aria-label="Share referral"
        className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">
          Refer friends and earn more
        </h2>
        <div className="text-gray-400 text-sm text-left">
          Loading referral details...
        </div>
      </section>
    );
  }

  const handleCopyLink = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section
      aria-label="Share referral"
      className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">
        Refer friends and earn more
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-start w-full">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Your Referral Link
          </label>
          <div className="flex w-full gap-3">
            <input
              type="text"
              readOnly
              value={link}
              className="bg-[#f8fafc] border border-slate-100 px-4 py-3 rounded-xl text-slate-700 text-sm flex-1 outline-none text-left select-all"
            />
            <button
              onClick={handleCopyLink}
              className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer min-w-[85px] text-center"
            >
              {copiedLink ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Your Referral Code
          </label>
          <div className="flex w-full gap-3">
            <input
              type="text"
              readOnly
              value={code}
              className="bg-[#f8fafc] border border-slate-100 px-4 py-3 rounded-xl text-slate-700 text-sm flex-1 outline-none text-left select-all font-mono tracking-wider"
            />
            <button
              onClick={handleCopyCode}
              className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer min-w-[85px] text-center"
            >
              {copiedCode ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareReferral;
