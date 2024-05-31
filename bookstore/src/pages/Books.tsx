import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { Book } from "../config/types";

function Books() {

  const [books, setBooks] = useState<Book[]>([]);
  const id_user = 1;


  async function getBooks() {
    try {
      const resp = await fetch(`https://boockstore-codenotch.onrender.com/books?id_user=${id_user}`);
      const json = await resp.json();
      setBooks(json.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="mt-20">Books</div>
      <BookList books={books} />
    </div>
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