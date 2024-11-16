import fileBooks from '../assets/books.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Book {
    ISBN: `${string}-${string}`,
    cover: string,
    synopsis: string,
    genre: string,
    title: string,
    year: number,
    author: { name: string, otherBooks: string[] },
    pages: number,
}

export const getAllBooks = (): Book[] => {
    try {
        return fileBooks.library.map(({ book }) => {
            return book;
        }) as Book[];
    } catch (error) {
        console.log('getAllBooks error: ', error);
        return [];
    }
};