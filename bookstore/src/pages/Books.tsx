import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { Book } from "../config/types";

function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <>
      <div className="mt-20">Books</div>
      <BookList books={books} />
    </>
  );
}

export default Books;



// // import BookItem from "../components/BookItem"
// import BookList from "../components/BookList"
// import { useEffect, useState } from "react";
// import { Book } from


// function Books() {
//   const [books, setBooks] = useState<Book[]>([]);
//   useEffect(()=> {
//     fetch('/books')
//       .then(resp => resp.json())
//       .then(data => setBooks(data))
//       .catch(error => console.log('Error:', error))
//   },[]);


//   return (
//     <>
//     <div className="mt-20">Books</div>
//     <BookList />

//     {/* <BookItem book={book}/> */}
//     </>
//   )
// }

// export default Books