import BookItem from "../components/BookItem";
import { Book } from "../config/types";

type BookListProps = {
  books: Book[];
}

function BookList({ books }: BookListProps) {
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id_book} book={book} />
      ))}
    </>
  );
}

export default BookList;