// import styles from './BooksPage.module.css';

import './BooksPage.css';

import BookItem from "../components/BookItem";

function BooksPage (){

    // const books = [
    //     { imageUrl: 'http', title: 'Clean JavaScript', author:'Miguel A. Gómez', price: 20},
    //     { imageUrl: 'http', title: 'Clean JavaScript', author:'Miguel A. Gómez', price: 20},
    // ]
    return (
        <div className="bookspage__container">
        
        <BookItem imageUrl="https://m.media-amazon.com/images/I/51q4UQsslIL._SL1233_.jpg" title="Clean JavaScript" author="Miguel A. Gómez"/>

        {/* <div className="books-page">
      {books.map((book) => (
        <BookItem key={book.title} {...book} onClick={() => handleBookClick(book)} />
      ))}
    </div> */}

    

        {/* <BookItem title="Never ending story" price={10}>
            <h2>Soy un h2</h2>
            <h3>Soy un h3</h3>
        </BookItem>
           
        <BookItem title="necesita nombre">
            Children item
            <input type="text" ></input>
        </BookItem> */}
        </div>
    )
}

export default BooksPage;