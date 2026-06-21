import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import Summary from "../../components/Summary";
import ShareReferral from "../../components/ShareReferral";
import AllReferrals from "../../components/AllReferrals";
import Footer from "../../components/Footer";
import {useEffect, useState} from "react";
import { fetchReferralsData } from "../../services/referralsApi";

const Dashboard = () => {

    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getAffiliateData = async () => {
            setError(null);
            const data = await fetchReferralsData();
            if (data && data.success && data.data) {
                setUserData(data.data);
            } else {
                const errorMsg = data && data.error 
                    ? `${data.error} (Status: ${data.status})` 
                    : "Failed to load dashboard data.";
                setError(errorMsg);
                setUserData([]);
            }
        };
        getAffiliateData();
    }, []);


    return (
        <div className="min-h-screen bg-gray-100 pr-24 pl-24 flex flex-col justify-between">
            <div>
                <Navbar />
                <div className="p-8 mt-2">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-black-600 font-bold text-3xl mt-3">Referral Dashboard</h1>
                        <p className="mt-2 mb-6">Track your referrals, earnings, and partner activity in one place.</p>
                    </div>
                    {error && (
                        <div role="alert" className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm font-medium">
                            {error}
                        </div>
                    )}
                    <Overview metrics={userData.metrics || []}/>
                    <Summary summary={userData.serviceSummary || []} />
                    <ShareReferral referral={userData.referral || []} /> 
                    <AllReferrals referralsList={userData.referrals || []} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
