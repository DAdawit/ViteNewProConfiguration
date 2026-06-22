import React from "react";
import { Outlet } from "react-router-dom";

function ProtectedRoutes({ token }) {

    // eslint-disable-next-line react-hooks/immutability
    return token ? <Outlet /> : (window.location.href = "/login");
}

export default ProtectedRoutes;
