// import styles from './BooksPage.module.css';

import BookItem from "../components/BookItem";
import { Book } from "../config/types";

function BooksPage (){

    const book: Book = {
        id_book: 1,
        id_user: 1,
        title: 'Clean JavaScript',
        author: 'Miguel A. Gómez',
        photo: 'https://m.media-amazon.com/images/I/51q4UQsslIL._SL1233_.jpg',
        price: 29.9,
        type: 'Tapa Dura'
    }
    // const books = [
    //     { imageUrl: 'http', title: 'Clean JavaScript', author:'Miguel A. Gómez', price: 20},
    //     { imageUrl: 'http', title: 'Clean JavaScript', author:'Miguel A. Gómez', price: 20},
    // ]

    return (
        <div className="bookspage__container">
        
        <BookItem book={book}/>

        </div>
    )
}

export default BooksPage;