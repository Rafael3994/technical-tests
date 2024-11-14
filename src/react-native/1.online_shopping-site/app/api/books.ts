import fileBooks from './../../assets/books.json';

export const getAllBooks = () => {
    try {
        return fileBooks.library;
    } catch (error) {
        console.log('getAllBooks error: ', error);
    }
};