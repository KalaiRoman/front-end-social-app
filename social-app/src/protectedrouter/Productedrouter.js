import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
    const isAuth = localStorage.getItem("accesstoken");
    console.log(isAuth,'isAuth')
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
