import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
    const isAuth = localStorage.getItem("accesstoken");
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
