import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const Dashboard = () => {

    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        const getAffiliateData = async () => {
            try {
                const token = Cookies.get("jwt_token");
                const res = await fetch(`https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                if (data && data.success && data.data && data.data.metrics) {
                    setUserData(data.data.metrics);
                } else {
                    console.error("Invalid response format:", data);
                    setUserData([]);
                }
            } catch (error) {
                console.error("Error fetching affiliate data:", error);
                setUserData([]);
            }
        };
        getAffiliateData();
    }, []);


    return (
        <div className="min-h-screen bg-gray-100 pr-24 pl-24">
            <Navbar />
            <div className="p-8 mt-2">
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-black-600 font-bold text-3xl mt-3">Referral Dashboard</h1>
                    <p className="mt-2  ">Track your referrals, earnings, and partner activity in one place.</p>
                </div>
                <Overview metrics={userData}/>
            </div>
        </div>
    );
};

export default Dashboard;
