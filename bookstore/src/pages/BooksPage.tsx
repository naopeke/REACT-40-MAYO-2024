// import styles from './BooksPage.module.css';

import BookItem from "../components/BookItem";

function BooksPage (){

    // const books = [
    //     { imageUrl: 'http', title: 'Clean JavaScript', author:'Miguel A. Gómez', price: 20},
    //     { imageUrl: 'http', title: 'Clean JavaScript', author:'Miguel A. Gómez', price: 20},
    // ]

    return (
        <div className="bookspage__container">
        
        <BookItem imageUrl="https://m.media-amazon.com/images/I/51q4UQsslIL._SL1233_.jpg" title="Clean JavaScript" author="Miguel A. Gómez" price={29.9} />



        </div>
    )
}

export default BooksPage;