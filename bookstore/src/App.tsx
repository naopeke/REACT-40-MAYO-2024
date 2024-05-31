import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Books from './pages/Books';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditBook from './pages/EditBook';
import AddBook from './pages/AddBook';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProvider from './contexts/UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App(){



  return (
    <>
    <UserProvider>
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />

              <Route element={<PublicRoutes />}>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route element={<PrivateRoutes />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/books" element={<Books />} />
                <Route path="/edit-book" element={<EditBook />} />
                <Route path="/add-book" element={<AddBook />} />
              </Route>
            </Routes>
          </main>  
        <Footer />
        </UserProvider>
        <ToastContainer />
    </>
  )
}

export default App;