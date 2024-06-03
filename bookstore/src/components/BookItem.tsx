import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Book } from "../config/types";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


type BookItemProps = {
    book: Book
}


function BookItem(props: BookItemProps) {
    const { book } = props;

    const navigate = useNavigate();



    function handleEditBook(event: React.MouseEvent) {
        event.preventDefault();
        console.log('edit', book.id_book);
        console.log('Before edit click', { state: { book } });
        navigate('/edit-book', {state: {book}}); // Navigateとstateはセット
    }

    async function handleDeleteBook(event: React.MouseEvent) {
        event.preventDefault();
        console.log('delete', book.id_book);
        try {
            const resp = await axios.delete(`http://localhost:3000/books/${book.id_book}`);
            console.log('Success', resp.data);
            window.location.reload();
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <div className="bookitem__container min-h-screen flex justify-center items-center pt-6">
            {/* {books.map(book => ( */}
                <div key={book.id_book} className="max-w-xm rounded overflow-hidden shadow-lg">
                    <img className="w-60 h-80 ml-6" src={book.photo} alt={`${book.title} cover`} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{book.title}</div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                                <p className="text-gray-700 text-base italic">
                                    {book.author}
                                </p>
                                <p className="text-gray-700 text-base">
                                    {book.price}€
                                </p>
                            </div>
                            <div className="flex flex-col items-end">
                                <div>
                                    <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                        {book.type}
                                    </span>
                                </div>
                                <div className="flex flex-row ml-auto space-x-3">
                                    <CiEdit style={{ color: 'blue' }} onClick={handleEditBook} className="cursor-pointer"/>
                                    <FaTrash style={{ color: 'red' }} onClick={handleDeleteBook} className="cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BookItem;
