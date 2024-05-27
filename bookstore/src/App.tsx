import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoutes from './components/PrivateRoutes';

import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import Profile from './pages/Profile';
import EditBook from './pages/EditBook';
import AddBook from './pages/AddBook';
import Register from './pages/Register';
import Login from './pages/Login';




function App(){
  return (
    <>

        <Header />
          <main>
            {/* <Home /> */}
            {/* <BooksPage /> */}

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login />} />

              <Route element={<PrivateRoutes />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/edit-book" element={<EditBook />} />
                <Route path="/add-book" element={<AddBook />} />
              </Route>

            </Routes>
          </main>
        <Footer />


    </>
  )
}

export default App;