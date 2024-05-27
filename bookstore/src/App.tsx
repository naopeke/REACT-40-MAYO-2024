import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoutes from './components/PrivateRoutes';

import Home from './pages/Home';
// import BooksPage from './pages/BooksPage';
import Profile from './pages/Profile';
import EditBook from './pages/EditBook';
import AddBook from './pages/AddBook';
import Register from './pages/Register';
import Books from './pages/Books';




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
              <Route path="/profile" element={<Profile/>} />
              <Route path="/books" element={<Books/>} />
              <Route path="/edit-book" element={<EditBook/>} />
              <Route path="/add-book" element={<AddBook/>} />

              <Route element={<PrivateRoutes />} />

            </Routes>
          </main>
        <Footer />


    </>
  )
}

export default App;