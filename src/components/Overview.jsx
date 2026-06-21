import { 
    DollarSign, 
    CreditCard, 
    Link, 
    Hourglass, 
    Percent, 
    Coins, 
    Users, 
    ArrowLeftRight,
    HelpCircle
} from 'lucide-react';

const metricIcons = {
    "Total Balance": DollarSign,
    "Discount Percentage": CreditCard,
    "Total Referral": Link,
    "Discount Amount": Hourglass,
    "Commission Amount": Percent,
    "Total Earning": Coins,
    "Commission Discount": Users,
    "Total Bank Transfer": ArrowLeftRight
};

const Overview = ({ metrics }) => {
    if (metrics.length === 0) {
        return (
            <section aria-label="Overview metrics" className="mt-10 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">Overview</h2>
                <div className="text-black-500 text-sm">Loading metrics...</div>
            </section>
        );
    }

    return (
        <section aria-label="Overview metrics" className="mt-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                    const IconComponent = metricIcons[metric.label] || HelpCircle;
                    return (
                        <div key={index} className="bg-indigo-100/20 border border-indigo-100/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
                                <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{metric.value}</h3>
                            <p className="text-sm font-medium text-gray-400 mt-1">{metric.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Overview;

