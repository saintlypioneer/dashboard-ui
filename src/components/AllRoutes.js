import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

function AllRoutes(){

    const paths = [
        {
            path: "/",
            element: <Navigate to="/dashboard" />
        },
        {
            path: "/auth",
            element: <Auth />
        },
        {
            path: "/forgot-password",
            element: <h1>FORGOT PASSWORD</h1>
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "*",
            element: <h1>404</h1>
        }
    ];

    return (
        <Routes>
            {
                paths.map((path, index) => {
                    return (
                        <Route key={index} path={path.path} element={path.element} />
                    );
                })
            }
        </Routes>
    );
}

export default AllRoutes;