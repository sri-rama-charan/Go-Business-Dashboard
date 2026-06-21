import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const token = Cookies.get("jwt_token");
    if(token)
    {
        return children;
    }
    else{
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;
