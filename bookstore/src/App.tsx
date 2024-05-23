import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BooksPage from './pages/BooksPage';

function App(){
  return (
    <>
      <Header />
      <main>
        <Home />
        <BooksPage />
      </main>
      <Footer />
    </>
  )
}

export default App;