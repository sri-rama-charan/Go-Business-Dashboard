import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("jwt_token");
        navigate("/login", { replace: true });
    };

    return (
        <nav aria-label="Primary" className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
            <Link to="/" className="text-indigo-600 font-bold text-xl" aria-label="Go to dashboard home">Go Business</Link>
            <div className="flex items-center gap-4">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-200 cursor-pointer">
                    Try for free
                </button>
                <button 
                    onClick={handleLogout}
                    className="border border-red-200 text-red-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-red-50 hover:border-red-300 transition duration-200 cursor-pointer"
                >Log out</button>
            </div>
        </nav>
    );
};

export default Navbar;
