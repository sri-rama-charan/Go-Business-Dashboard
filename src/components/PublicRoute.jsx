
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {
    const token = Cookies.get("jwt_token");
    if(!token)
    {
        return children;
    }
    else{
        return <Navigate to="/" replace />;
    }
};

export default PublicRoute;