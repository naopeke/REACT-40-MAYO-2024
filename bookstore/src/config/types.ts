type Book = {
    id_book: number;
    id_user: number;
    title: string;
    author: string;
    photo: string;
    price: number;
    type: 'Tapa Dura' | 'Tapa Blanda'
}

type User = {
    id_user: number;
    name: string;
    last_name: string;
    email: string;
    photo: string;
    password: string;
}

export type {
    Book, User
}