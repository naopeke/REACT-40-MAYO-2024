import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {

    const user = { name: 'Nao'};


  return (
    <>
    {!user && <Navigate to="/" />}
    {user && <Outlet />}

    {/* if(!user) return <Navigate to="/login" />
    return <Outlet /> */}
    </>
  )
}

export default PrivateRoutes