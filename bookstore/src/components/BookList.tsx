import BookItem from "../components/BookItem";
import { Book } from "../config/types";

type BookListProps = {
  books: Book[];
}

function BookList( props: BookListProps) {
  const {books} = props;

  
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id_book} book={book} />
      ))}
    </>
  );
}

export default BookList;