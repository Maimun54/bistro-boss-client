import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loader}=useAuth()
    const [isAdmin,isAdminLoading]=useAdmin()
    const location =useLocation()
    if(loader || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
       return children
    }
    return <Navigate to="/" state={{from:location}} replace>

    </Navigate>
};

export default AdminRoute;