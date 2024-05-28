
import { Navigate, Outlet } from 'react-router-dom';



function PublicRoutes() {
    const user = null;
    if (!user) return <Outlet />


  return <Navigate to="/profile" />
}

export default PublicRoutes