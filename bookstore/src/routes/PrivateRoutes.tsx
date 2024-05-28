import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {

    const user = { name: 'Nao'};

    {/* {user && <Navigate to="/" />}
    {user && <Outlet />} */}

     if (user) return <Outlet /> 

  return <Navigate to="login"/>

}

export default PrivateRoutes