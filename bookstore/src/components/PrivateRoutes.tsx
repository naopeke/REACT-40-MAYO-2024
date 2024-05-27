// import { Route, Routes, NavLink } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {

    const user = { name: 'Nao'};


  return (
    <>
    {!user && <Navigate to="/" />}
    {user && <Outlet />}

    {/* if(!user) return <Navigate to="/register" />
    return <Outlet /> */}
    </>
  )
}

export default PrivateRoutes