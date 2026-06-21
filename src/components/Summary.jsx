


const Summary = ({ summary }) => {
    if (!summary || Object.keys(summary).length === 0) {
        return (
            <section aria-label="Service summary" className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">Service summary</h2>
                <div className="text-slate-400 text-sm text-left">Loading metrics...</div>
            </section>
        );
    }

    const labelMap = {
        service: "Service",
        yourReferrals: "Your Referrals",
        activeReferrals: "Active Referrals",
        totalRefEarnings: "Total Ref. Earnings"
    };

    const keys = ["service", "yourReferrals", "activeReferrals", "totalRefEarnings"];

    return (
        <section aria-label="Service summary" className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">Service summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {keys.map((key, index) => {
                    const label = labelMap[key] || key;
                    const value = summary[key] !== undefined ? summary[key] : "";
                    return (
                        <div key={index} className="bg-indigo-100/20 border border-indigo-100/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start">
                            <p className="text-sm font-medium text-gray-400 mt-1">{label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mt-1">{value}</h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Summary;