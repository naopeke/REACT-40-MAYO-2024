// import styles from './BookItem.module.css';
import { ReactNode } from 'react';
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

type BookItemProps = {
    imageUrl: string;
    title: string;
    author:string;
    price?: number;
    children?: ReactNode;
}

// const book1: Book = {
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//     pages: 357
// }



function BookItem (props: BookItemProps){
    console.log(props)

    return (
        <div className="bookitem__container min-h-screen flex justify-center items-center pt-6">
           
            <div className="max-w-xm rounded overflow-hidden shadow-lg">
                <img className="w-60 ml-6" src={props.imageUrl} alt="image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <div className= "flex flex-col" >
                            <p className="text-gray-700 text-base italic">
                                {props.author}
                            </p>
                            <p className="text-gray-700 text-base">
                                {props.price}€
                            </p>
                        </div>

                    <div className= "flex flex-col items-end">
                        <div>
                        <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Novela</span>
                        </div>
                        <div className="flex flex-row space-x-10">
                            <CiEdit style={{ color: 'blue'}}/><FaTrash style={{ color: 'red'}}/>
                        </div>
                    </div>

                    </div>

                </div>
 
  
                </div>
        </div>
    )
}

export default BookItem;