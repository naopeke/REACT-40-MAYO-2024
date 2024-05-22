// import styles from './BookItem.module.css';
import { ReactNode } from 'react';

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
                <img className="w-60" src={props.imageUrl} alt="image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                     {props.author}
                     {props.price}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Novela</span>
                </div>
                </div>
        </div>
    )
}

export default BookItem;