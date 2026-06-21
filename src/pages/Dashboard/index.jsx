import Navbar from "../../components/Navbar";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-8">
                <h1 className="text-green-600 font-bold text-3xl">Referral Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
