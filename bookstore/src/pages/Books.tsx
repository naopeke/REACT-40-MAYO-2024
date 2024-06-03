import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { Book } from "../config/types";
import { useUser } from '../contexts/UserProvider';
import { Link } from "react-router-dom";

function Books() {

  const [books, setBooks] = useState<Book[]>([]);
  
  const { user } = useUser(); //ログインユーザーの情報を取得
  const id_user = user?.id_user;
  console.log('logged in id_user in book page:',id_user)


  useEffect(() => {
    async function getBooks() {
      try {
        const resp = await fetch(`http://localhost:3000/books?id_user=${id_user}`);
        const json = await resp.json();
        setBooks(json);
        console.log('fetched from back', json);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
  
    getBooks();
  }, [id_user]);
  
  return (
    <div className="flex flex-wrap justify-center">
      <div className="mt-20">Books</div>
      {books.length === 0 ? (
        <div className="mt-10 text-center">
          <p>No books available.</p>
          <Link to="/add-book" className="text-blue-500 underline">
            Go to Addbook page
          </Link>
        </div>
      ) : (
        <BookList books={books} />
      )}
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